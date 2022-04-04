import React from 'react';
import { useRecoilValue } from 'recoil';

import { Todo, todosState } from '../store';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todos = useRecoilValue(todosState);
  console.log(todos, '리스트');
  return (
    <div className="TodoList">
      {todos.map((todo: Todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
