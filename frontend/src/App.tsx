import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Root from './pages/Root';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';

import { createClient } from './client';

const client = createClient();

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/todo-list">
              <Todo />
            </Route>
            <Route path="/">
              <Root />
            </Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
