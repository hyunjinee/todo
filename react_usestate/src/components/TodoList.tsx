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
        // <div key={todo.id} className="TodoListItem">
        //   <div
        //     className={todo.done ? 'checkbox checked' : 'checkbox'}
        //     // className={'checkbox '}
        //     onClick={() => setTodos(toggleTodo(todos, todo.id))}
        //   >
        //     {todo.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        //     <div className="text">{todo.text}</div>
        //   </div>
        //   <div className="remove" onClick={() => setTodos(removeTodo(todos, todo.id))}>
        //     <MdRemoveCircleOutline />
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default React.memo(TodoList);
