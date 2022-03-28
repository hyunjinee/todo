import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

import TodoListItem from './TodoListItem';
import { TodosType, setTodosType, toggleTodo } from '../store';
import './TodoList.scss';

interface ITodoList {
  todos: TodosType;
  setTodos: setTodosType;
}

const TodoList = ({ todos, setTodos }: ITodoList) => {
  console.log(todos);
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <div key={todo.id} className="TodoListItem">
          <div className="checkbox">
            {todo.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{todo.text}</div>
          </div>
          <div>
            <MdRemoveCircleOutline />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
