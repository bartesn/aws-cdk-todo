import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import { GraphqlApi, MappingTemplate, PrimaryKey, Values } from '@aws-cdk/aws-appsync';

interface TodoItemsProps {
  graphqlApi: GraphqlApi;
}

export class TodoItems extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: TodoItemsProps) {
    super(scope, id);

    // DynamoDB table
    const todoItemsTable = new dynamodb.Table(this, id, {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // Data source
    const todoItemsTableDataSource = props.graphqlApi.addDynamoDbDataSource(
      'todoItemsTableDataSource',
      todoItemsTable
    );

    // Resolvers
    todoItemsTableDataSource.createResolver({
      typeName: 'Query',
      fieldName: 'getTodoItems',
      requestMappingTemplate: MappingTemplate.dynamoDbScanTable(),
      responseMappingTemplate: MappingTemplate.dynamoDbResultList(),
    });

    todoItemsTableDataSource.createResolver({
      typeName: 'Mutation',
      fieldName: 'addTodoItem',
      requestMappingTemplate: MappingTemplate.dynamoDbPutItem(PrimaryKey.partition('id').auto(), Values.projecting(id)),
      responseMappingTemplate: MappingTemplate.dynamoDbResultItem(),
    });
  }
}
