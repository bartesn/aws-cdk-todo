import React from 'react';
import { Reference } from '@apollo/client';

import { TodoItem as TodoItemInterface } from '../../../generated/types';
import { useDeleteTodoItemMutation } from './graphql/mutation.generated';

import styles from './TodoItem.module.scss';

interface Props {
  todoItem: TodoItemInterface;
}

function TodoItem({ todoItem: { id, content, completed } }: Props): React.ReactElement {
  const [deleteTodoItem, { loading }] = useDeleteTodoItemMutation();

  const onDelete = async () => {
    if (loading) return;

    await deleteTodoItem({
      variables: { id },
      update: (cache, response) => {
        if (response.data?.deleteTodoItem) {
          cache.modify({
            fields: {
              getTodoItems(existingTodoItems = [], { readField }) {
                return existingTodoItems.filter(
                  (todoItemRef: Reference) => id !== readField('id', todoItemRef)
                );
              },
            },
          });
        }
      },
    });
  };

  return (
    <div className={[styles.item, loading ? styles.itemLoading : ''].join(' ')}>
      <input className={styles.input} type="checkbox" defaultChecked={completed} />
      <div className={styles.content}>{content}</div>
      <button type="button" className={styles.button} onClick={() => onDelete()}>
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
