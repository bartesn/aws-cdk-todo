import { gql } from '@apollo/client';

export const DELETE_TODO_ITEM = gql`
  mutation deleteTodoItem($id: ID!) {
    deleteTodoItem(id: $id) {
      id
      content
      completed
    }
  }
`;
