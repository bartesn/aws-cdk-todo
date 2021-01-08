import * as Types from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type AddTodoItemMutationVariables = Types.Exact<{
  content: Types.Scalars['String'];
}>;


export type AddTodoItemMutation = { __typename?: 'Mutation', addTodoItem?: Types.Maybe<{ __typename?: 'TodoItem', id: string, content: string, completed: boolean }> };


export const AddTodoItemDocument = gql`
    mutation addTodoItem($content: String!) {
  addTodoItem(input: {content: $content, completed: false}) {
    id
    content
    completed
  }
}
    `;
export type AddTodoItemMutationFn = Apollo.MutationFunction<AddTodoItemMutation, AddTodoItemMutationVariables>;

/**
 * __useAddTodoItemMutation__
 *
 * To run a mutation, you first call `useAddTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoItemMutation, { data, loading, error }] = useAddTodoItemMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
export function useAddTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoItemMutation, AddTodoItemMutationVariables>) {
        return Apollo.useMutation<AddTodoItemMutation, AddTodoItemMutationVariables>(AddTodoItemDocument, baseOptions);
      }
export type AddTodoItemMutationHookResult = ReturnType<typeof useAddTodoItemMutation>;
export type AddTodoItemMutationResult = Apollo.MutationResult<AddTodoItemMutation>;
export type AddTodoItemMutationOptions = Apollo.BaseMutationOptions<AddTodoItemMutation, AddTodoItemMutationVariables>;