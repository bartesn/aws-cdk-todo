import React from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import type { TodoItem_todo } from './__generated__/TodoItem_todo.graphql';
import styles from './TodoItem.module.scss';

type Props = {
  todoItem: TodoItem_todo;
};

function TodoItem({ todoItem }: Props): React.ReactElement {
  console.log(todoItem);
  return (
    <div className={styles.item}>
      <button type="button" className={styles.button}>
        ❌
      </button>
    </div>
  );
}

export default createFragmentContainer(TodoItem, {
  todo: graphql`
    fragment TodoItem_todo on TodoItem {
      id
      content
    }
  `,
});
