import React from 'react';

import styles from './TodoList.module.scss';
import { TodoQueryResponse } from '../../pages/Todo/__generated__/TodoQuery.graphql';

import TodoItem from './TodoItem';

interface Props {
  todoItems: TodoQueryResponse;
}

function TodoList({ todoItems }: Props): React.ReactElement {
  return (
    <div className={styles.list}>
      {todoItems.getTodoItems.map((todoItem) => (
        <TodoItem todoItem={todoItem} key={todoItem.id} />
      ))}
    </div>
  );
}

export default TodoList;
