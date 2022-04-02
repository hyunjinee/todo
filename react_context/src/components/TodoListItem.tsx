import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

import { Todo } from '../store';

interface ITodoListItem {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoListItem = ({ todo, toggleTodo, removeTodo }: ITodoListItem) => {
  return (
    <div key={todo.id} className="TodoListItem">
      <div
        className={todo.done ? 'checkbox checked' : 'checkbox'}
        onClick={() => {
          toggleTodo(todo.id);
        }}
      >
        {todo.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove" onClick={() => removeTodo(todo.id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
