import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_TODO_ITEMS = gql`
    query getTodoItems {
        getTodoItems {
            id
            content
            completed
        }
    }
`;

function TodoList() {
  const { loading, error, data } = useQuery(GET_TODO_ITEMS);

  if (loading) return <div>Loading</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <ul>
      {data.getTodoItems.map((todoItem: { id: string, content: string, completed: boolean })=> (
        <li key={todoItem.id}>
          <input type="checkbox" defaultChecked={todoItem.completed} />
          <span>{todoItem.content}</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
