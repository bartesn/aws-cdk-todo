import { gql } from '@apollo/client';

export const ADD_TODO_ITEM = gql`
  mutation addTodoItem($content: String!) {
    addTodoItem(input: { content: $content, completed: false }) {
      id
      content
      completed
    }
  }
`;
