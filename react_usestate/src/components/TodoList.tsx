import React from 'react';

import { TodosType, Todo } from '../store';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

interface ITodoList {
  todos: TodosType;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleTodo, removeTodo }: ITodoList) => {
  return (
    <div className="TodoList">
      {todos.map((todo: Todo) => (
        <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
