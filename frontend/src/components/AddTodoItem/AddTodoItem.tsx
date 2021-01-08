import React, { useState, useCallback } from 'react';

import styles from './AddTodoItem.module.scss';
import { useAddTodoItemMutation } from './graphql/mutation.generated';

function AddTodoItem(): React.ReactElement {
  const [value, setValue] = useState<string>('');

  const [addTodoItem, { loading }] = useAddTodoItemMutation();

  const onAdd = useCallback(() => {
    (async () => {
      if (loading || value === '') return;

      await addTodoItem({
        variables: {
          content: value,
        },
        update: (cache, response) => {
          if (response?.data?.addTodoItem) {
            cache.modify({
              fields: {
                getTodoItems(existingTodoItems = []) {
                  return [...existingTodoItems, response.data?.addTodoItem];
                },
              },
            });
          }
        },
      });

      setValue('');
    })();
  }, [addTodoItem, loading, value, setValue]);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  const onInputKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onAdd();
      }
    },
    [onAdd]
  );

  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Todo..."
        onChange={onInputChange}
        onKeyUp={onInputKeyUp}
        value={value}
      />
      <button type="button" onClick={onAdd} disabled={loading}>
        Add
      </button>
    </div>
  );
}

export default AddTodoItem;
