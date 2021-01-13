export default {
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_AWS_APPSYNC_GRAPHQL_API_URL,
  aws_appsync_region: process.env.REACT_APP_AWS_REGION,
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  // aws_appsync_apiKey: process.env.REACT_APP_AWS_APPSYNC_API_KEY,
  Auth: {
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_CLIENT_ID,
  },
};
