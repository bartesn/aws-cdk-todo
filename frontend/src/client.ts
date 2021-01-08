import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import { AuthOptions, createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

import awsConfig from './awsConfig';

const config = {
  url: awsConfig.aws_appsync_graphqlEndpoint || '',
  region: awsConfig.aws_appsync_region || '',
  auth: {
    type: awsConfig.aws_appsync_authenticationType,
    apiKey: awsConfig.aws_appsync_apiKey,
  } as AuthOptions,
  disableOffline: true,
};

const link = ApolloLink.from([
  createAuthLink(config),
  createSubscriptionHandshakeLink(config),
]);

export function createClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}
