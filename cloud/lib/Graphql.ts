import * as cdk from '@aws-cdk/core';
import { UserPool } from '@aws-cdk/aws-cognito';
import {
  AuthorizationType,
  CfnApiKey,
  FieldLogLevel,
  GraphqlApi,
  Schema,
} from '@aws-cdk/aws-appsync';

interface GraphqlProps {
  schemaPath: string;
  userPool: UserPool;
}

export class Graphql extends cdk.Construct {
  public readonly api: GraphqlApi;

  constructor(scope: cdk.Construct, id: string, props: GraphqlProps) {
    super(scope, id);

    this.api = new GraphqlApi(this, 'GraphqlApi', {
      name: `GraphqlApi`,
      logConfig: {
        fieldLogLevel: FieldLogLevel.ALL,
      },
      schema: new Schema({
        filePath: props.schemaPath,
      }),
      xrayEnabled: true,
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: AuthorizationType.USER_POOL,
          userPoolConfig: {
            userPool: props.userPool
          }
        }
      }
    });

    const apiKey = new CfnApiKey(this, 'CfnApiKey', {
      apiId: this.api.apiId,
    });

    // output
    new cdk.CfnOutput(this, 'GraphqlApiUrl', {
      value: this.api.graphqlUrl,
      exportName: 'GraphqlApiUrl',
    });

    // TODO: potential security issue and definitely not a best practice
    // to print API key, done for sake of demo simplicity
    new cdk.CfnOutput(this, 'GraphqlApiKey', {
      value: apiKey.attrApiKey,
      exportName: 'GraphqlApiKey',
    });
  }
}
