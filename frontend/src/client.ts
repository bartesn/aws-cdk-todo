import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

import { createAuthLink, AUTH_TYPE } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

import awsConfig from './awsConfig';

const url = awsConfig.aws_appsync_graphqlEndpoint || '';
const region = awsConfig.aws_appsync_region || '';
const auth = {
  type: awsConfig.aws_appsync_authenticationType || AUTH_TYPE.API_KEY,
  apiKey: awsConfig.aws_appsync_apiKey || '',
};

const link = ApolloLink.from([
  createAuthLink({ url, region, auth: auth as any }),
  createSubscriptionHandshakeLink({ url, region, auth: auth as any })
]);

export function createClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  });
}
