import { AUTH_TYPE } from 'aws-appsync-auth-link';

export default {
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_AWS_APPSYNC_GRAPHQL_API_URL,
  aws_appsync_region: process.env.REACT_APP_AWS_REGION,
  aws_appsync_authenticationType: AUTH_TYPE.API_KEY,
  aws_appsync_apiKey: process.env.REACT_APP_AWS_APPSYNC_API_KEY,
};
