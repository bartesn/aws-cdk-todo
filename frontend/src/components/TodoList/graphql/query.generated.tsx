import * as Types from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type GetTodoItemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTodoItemsQuery = { __typename?: 'Query', getTodoItems: Array<{ __typename?: 'TodoItem', id: string, content: string, completed: boolean }> };


export const GetTodoItemsDocument = gql`
    query getTodoItems {
  getTodoItems {
    id
    content
    completed
  }
}
    `;

/**
 * __useGetTodoItemsQuery__
 *
 * To run a query within a React component, call `useGetTodoItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoItemsQuery, GetTodoItemsQueryVariables>) {
        return Apollo.useQuery<GetTodoItemsQuery, GetTodoItemsQueryVariables>(GetTodoItemsDocument, baseOptions);
      }
export function useGetTodoItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoItemsQuery, GetTodoItemsQueryVariables>) {
          return Apollo.useLazyQuery<GetTodoItemsQuery, GetTodoItemsQueryVariables>(GetTodoItemsDocument, baseOptions);
        }
export type GetTodoItemsQueryHookResult = ReturnType<typeof useGetTodoItemsQuery>;
export type GetTodoItemsLazyQueryHookResult = ReturnType<typeof useGetTodoItemsLazyQuery>;
export type GetTodoItemsQueryResult = Apollo.QueryResult<GetTodoItemsQuery, GetTodoItemsQueryVariables>;