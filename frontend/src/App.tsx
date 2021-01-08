import React from 'react';
import { ApolloProvider } from '@apollo/client';

import AddTodoItem from './components/AddTodoItem';
import TodoList from './components/TodoList';

import { createClient } from './client';

const client = createClient();

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <TodoList />
        <AddTodoItem />
      </div>
    </ApolloProvider>
  );
}

export default App;
