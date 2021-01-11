import React from 'react';

import TodoList from '../../components/TodoList';
import AddTodoItem from '../../components/AddTodoItem';

function Todo(): React.ReactElement {
  return (
    <div>
      <TodoList />
      <AddTodoItem />
    </div>
  );
}

export default Todo;
