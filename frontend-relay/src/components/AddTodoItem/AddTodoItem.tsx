import React, { useState, useCallback } from 'react';

import styles from './AddTodoItem.module.scss';

function AddTodoItem(): React.ReactElement {
  const [value, setValue] = useState<string>('');

  const onAdd = useCallback(() => {
    (async () => {
      setValue('');
    })();
  }, [setValue]);

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
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  );
}

export default AddTodoItem;
