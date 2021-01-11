import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import { AuthOptions, createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

import Cookies from 'universal-cookie';

import awsConfig from './awsConfig';

export function createClient(): ApolloClient<NormalizedCacheObject> {
  const cookies = new Cookies();

  const config = {
    url: awsConfig.aws_appsync_graphqlEndpoint || '',
    region: awsConfig.aws_appsync_region || '',
    auth: {
      type: awsConfig.aws_appsync_authenticationType,
      jwtToken: cookies.get('todo-token'),
    } as AuthOptions,
    disableOffline: true,
  };

  const link = ApolloLink.from([
    createAuthLink(config),
    createSubscriptionHandshakeLink(config),
  ]);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}
