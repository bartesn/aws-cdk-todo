import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import Cookies from 'universal-cookie';

import Todo from './pages/Todo';

import { createClient, createLink } from './client';

const client = createClient();

function App(): React.ReactElement {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const cookies = new Cookies();

  return (
    <ApolloProvider client={client}>
      <AmplifyAuthenticator
        handleAuthStateChange={async (state) => {
          if (state === 'signedin') {
            const session = await Auth.currentSession();
            const token = session.getAccessToken().getJwtToken();
            cookies.set('todo-token', token);

            client.setLink(createLink(token));
            setLoggedIn(true);
          }
        }}
      >
        <div className="App">
          <AmplifySignOut
            handleAuthStateChange={async (state) => {
              if (state === 'signedout') {
                cookies.remove('todo-token');
              }
            }}
          />
          {loggedIn && <Todo />}
        </div>
      </AmplifyAuthenticator>
    </ApolloProvider>
  );
}

export default App;
