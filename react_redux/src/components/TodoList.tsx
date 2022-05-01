import React from 'react';
import { useSelector } from 'react-redux';

import { Todo } from '../store/todos';
import { AppState } from '../store';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {
  const todos = useSelector((state: AppState) => state.todos);

  return (
    <div className="TodoList">
      {todos.map((todo: Todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
