import * as Types from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type OnAddTodoItemSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type OnAddTodoItemSubscription = { __typename?: 'Subscription', onAddTodoItem?: Types.Maybe<{ __typename?: 'TodoItem', id: string, content: string, completed: boolean }> };

export type OnDeleteTodoItemSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type OnDeleteTodoItemSubscription = { __typename?: 'Subscription', onDeleteTodoItem?: Types.Maybe<{ __typename?: 'TodoItem', id: string, content: string, completed: boolean }> };


export const OnAddTodoItemDocument = gql`
    subscription onAddTodoItem {
  onAddTodoItem {
    id
    content
    completed
  }
}
    `;

/**
 * __useOnAddTodoItemSubscription__
 *
 * To run a query within a React component, call `useOnAddTodoItemSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnAddTodoItemSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnAddTodoItemSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnAddTodoItemSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnAddTodoItemSubscription, OnAddTodoItemSubscriptionVariables>) {
        return Apollo.useSubscription<OnAddTodoItemSubscription, OnAddTodoItemSubscriptionVariables>(OnAddTodoItemDocument, baseOptions);
      }
export type OnAddTodoItemSubscriptionHookResult = ReturnType<typeof useOnAddTodoItemSubscription>;
export type OnAddTodoItemSubscriptionResult = Apollo.SubscriptionResult<OnAddTodoItemSubscription>;
export const OnDeleteTodoItemDocument = gql`
    subscription onDeleteTodoItem {
  onDeleteTodoItem {
    id
    content
    completed
  }
}
    `;

/**
 * __useOnDeleteTodoItemSubscription__
 *
 * To run a query within a React component, call `useOnDeleteTodoItemSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeleteTodoItemSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeleteTodoItemSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnDeleteTodoItemSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeleteTodoItemSubscription, OnDeleteTodoItemSubscriptionVariables>) {
        return Apollo.useSubscription<OnDeleteTodoItemSubscription, OnDeleteTodoItemSubscriptionVariables>(OnDeleteTodoItemDocument, baseOptions);
      }
export type OnDeleteTodoItemSubscriptionHookResult = ReturnType<typeof useOnDeleteTodoItemSubscription>;
export type OnDeleteTodoItemSubscriptionResult = Apollo.SubscriptionResult<OnDeleteTodoItemSubscription>;