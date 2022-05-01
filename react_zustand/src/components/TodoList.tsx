import React from 'react';

import TodoListItem from './TodoListItem';
import './TodoList.scss';
import useStore, { Todo } from '../store';

const TodoList = () => {
  const store = useStore();

  return (
    <div className="TodoList">
      {store.todos.map((todo: Todo) => (
        <TodoListItem key={todo.id} todo={todo} toggle={store.toggle} remove={store.remove} />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
