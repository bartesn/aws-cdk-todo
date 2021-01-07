import * as cdk from '@aws-cdk/core';
import * as path from 'path';

import { CDN } from './cdn';
import { Graphql } from './Graphql';
import { Hosting } from './hosting';
import { TodoItems } from './TodoItems';

export class CloudStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // frontend static hosting
    const hosting = new Hosting(this, 'Hosting', { path: '../frontend/build' });
    new CDN(this, 'CDN', { bucket: hosting.websiteBucket });

    // GraphQL API
    const graphql = new Graphql(this, 'Graphql', {
      schemaPath: path.join(__dirname, 'schema.graphql'),
    });

    // TodoItems feature
    new TodoItems(this, 'TodoItems', { graphqlApi: graphql.api });
  }
}
