import React from 'react';
import { ApolloProvider } from '@apollo/client';

import TodoList from './components/TodoList';

import { createClient } from './client';

function App() {
  return (
    <ApolloProvider client={createClient()}>
      <div className="App">
        <TodoList />
      </div>
    </ApolloProvider>
  );
}

export default App;
