import * as cdk from '@aws-cdk/core';
import * as path from 'path';

import { CDN } from './Cdn';
import { Cognito } from './Cognito';
import { Graphql} from './Graphql';
import { Hosting } from './Hosting';
import { TodoItems } from './TodoItems';

export class CloudStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // frontend static hosting
    const hosting = new Hosting(this, 'Hosting', { path: '../frontend/build' });
    new CDN(this, 'CDN', { bucket: hosting.websiteBucket });

    // User pool
    const cognito = new Cognito(this, 'Cognito');

    // GraphQL API
    const graphql = new Graphql(this, 'Graphql', {
      schemaPath: path.join(__dirname, 'schema.graphql'),
      userPool: cognito.userPool
    });

    // TodoItems feature
    new TodoItems(this, 'TodoItems', { graphqlApi: graphql.api });
  }
}
