import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../../environment';
import TodoList from '../../components/TodoList';
import AddTodoItem from '../../components/AddTodoItem';

import { TodoQuery } from './__generated__/TodoQuery.graphql';

function Todo(): React.ReactElement {
  return (
    <QueryRenderer<TodoQuery>
      environment={environment}
      query={graphql`
        query TodoQuery {
          getTodoItems {
            id
            ...TodoItem_todo
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <div>
            <TodoList todoItems={props} />
            <AddTodoItem />
          </div>
        );
      }}
    />
  );
}

export default Todo;
