import { gql } from '@apollo/client';

export const ON_ADD_TODO_ITEM = gql`
  subscription onAddTodoItem {
    onAddTodoItem {
      id
      content
      completed
    }
  }
`;

export const ON_DELETE_TODO_ITEM = gql`
  subscription onDeleteTodoItem {
    onDeleteTodoItem {
      id
      content
      completed
    }
  }
`;
