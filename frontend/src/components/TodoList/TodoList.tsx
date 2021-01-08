import React from 'react';

import styles from './TodoList.module.scss';

import onAddTodoItemSubscriptionData from './onAddTodoItemSubscriptionData';
import onDeleteTodoItemSubscriptionData from './onDeleteTodoItemSubscriptionData';
import TodoItem from './TodoItem';
import { useGetTodoItemsQuery } from './graphql/query.generated';
import {
  useOnAddTodoItemSubscription,
  useOnDeleteTodoItemSubscription,
} from './graphql/subscription.generated';

function TodoList(): React.ReactElement {
  const { loading, error, data } = useGetTodoItemsQuery();

  useOnAddTodoItemSubscription({
    onSubscriptionData: onAddTodoItemSubscriptionData,
  });

  useOnDeleteTodoItemSubscription({
    onSubscriptionData: onDeleteTodoItemSubscriptionData,
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <div className={styles.list}>
      {data?.getTodoItems.map((todoItem) => (
        <TodoItem todoItem={todoItem} key={todoItem.id} />
      ))}
    </div>
  );
}

export default TodoList;
