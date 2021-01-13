import { API, graphqlOperation } from 'aws-amplify';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

/* eslint-disable  @typescript-eslint/no-explicit-any */
function fetchQuery(operation: any, variables: any): any {
  return API.graphql(graphqlOperation(operation.text, variables));
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
function subscribe(operation: any, variables: any) {
  const graphql = API.graphql(graphqlOperation(operation.text, variables)) as any;
  return graphql.map(({ value }: any) => value);
}

const environment = new Environment({
  network: Network.create(fetchQuery, subscribe),
  store: new Store(new RecordSource()),
});

export default environment;
