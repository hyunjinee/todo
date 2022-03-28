import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

import TodoListItem from './TodoListItem';
import { TodosType, setTodosType, toggleTodo, removeTodo } from '../store';
import './TodoList.scss';

interface ITodoList {
  todos: TodosType;
  setTodos: setTodosType;
}

const TodoList = ({ todos, setTodos }: ITodoList) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <div key={todo.id} className="TodoListItem">
          <div
            className={todo.done ? 'checkbox checked' : 'checkbox'}
            // className={'checkbox '}
            onClick={() => setTodos(toggleTodo(todos, todo.id))}
          >
            {todo.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{todo.text}</div>
          </div>
          <div className="remove" onClick={() => setTodos(removeTodo(todos, todo.id))}>
            <MdRemoveCircleOutline />
          </div>
        </div>
      ))}
      {/* {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))} */}
      {/* {todos.map((todo) => (
        <div key={todo.id} className="TodoListItem">
          <div className="checkbox">
            {todo.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <input className="text" value={todo.text} disabled></input>
          </div>
          <div className="remove">
            <MdRemoveCircleOutline />
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default TodoList;
