import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

import { Todo, useTodosDispatch } from '../store';

interface ITodoListItem {
  todo: Todo;
}

const TodoListItem = ({ todo }: ITodoListItem) => {
  const dispatch = useTodosDispatch();

  return (
    <div key={todo.id} className="TodoListItem">
      <div
        className={todo.done ? 'checkbox checked' : 'checkbox'}
        onClick={() => {
          dispatch({ type: 'TOGGLE', id: todo.id });
        }}
      >
        {todo.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove" onClick={() => dispatch({ type: 'REMOVE', id: todo.id })}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
