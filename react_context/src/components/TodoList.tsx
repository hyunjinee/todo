import React from 'react';

import { useTodosState, Todo } from '../store';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todos = useTodosState();
  // console.log(todos);
  return (
    <div className="TodoList">
      {todos.map((todo: Todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
