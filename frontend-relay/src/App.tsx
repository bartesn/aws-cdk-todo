import React, { useState } from 'react';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import Cookies from 'universal-cookie';

import Todo from './pages/Todo';

function App(): React.ReactElement {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const cookies = new Cookies();

  return (
    <AmplifyAuthenticator
      handleAuthStateChange={async (state) => {
        if (state === 'signedin') {
          const session = await Auth.currentSession();
          const token = session.getAccessToken().getJwtToken();
          cookies.set('todo-token', token);

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
  );
}

export default App;
