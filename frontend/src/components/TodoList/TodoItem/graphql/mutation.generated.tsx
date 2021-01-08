import * as Types from '../../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type DeleteTodoItemMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteTodoItemMutation = { __typename?: 'Mutation', deleteTodoItem?: Types.Maybe<{ __typename?: 'TodoItem', id: string, content: string, completed: boolean }> };


export const DeleteTodoItemDocument = gql`
    mutation deleteTodoItem($id: ID!) {
  deleteTodoItem(id: $id) {
    id
    content
    completed
  }
}
    `;
export type DeleteTodoItemMutationFn = Apollo.MutationFunction<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>;

/**
 * __useDeleteTodoItemMutation__
 *
 * To run a mutation, you first call `useDeleteTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoItemMutation, { data, loading, error }] = useDeleteTodoItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>) {
        return Apollo.useMutation<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>(DeleteTodoItemDocument, baseOptions);
      }
export type DeleteTodoItemMutationHookResult = ReturnType<typeof useDeleteTodoItemMutation>;
export type DeleteTodoItemMutationResult = Apollo.MutationResult<DeleteTodoItemMutation>;
export type DeleteTodoItemMutationOptions = Apollo.BaseMutationOptions<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>;
