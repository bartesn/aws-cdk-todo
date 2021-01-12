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

const cookies = new Cookies();

export function createLink(token = cookies.get('todo-token') || ''): ApolloLink {
  const config = {
    url: awsConfig.aws_appsync_graphqlEndpoint || '',
    region: awsConfig.aws_appsync_region || '',
    auth: {
      type: awsConfig.aws_appsync_authenticationType,
      jwtToken: token,
    } as AuthOptions,
    disableOffline: true,
  };

  return ApolloLink.from([
    createAuthLink(config),
    createSubscriptionHandshakeLink(config),
  ]);
}

export function createClient(): ApolloClient<NormalizedCacheObject> {
  // TODO https://www.apollographql.com/docs/link/links/context/
  return new ApolloClient({
    cache: new InMemoryCache(),
  });
}
