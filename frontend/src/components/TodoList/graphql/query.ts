import { gql } from '@apollo/client';

export const GET_TODO_ITEMS = gql`
  query getTodoItems {
    getTodoItems {
      id
      content
      completed
    }
  }
`;
