import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

import { Todo } from '../store';

interface ITodoListItem {
  todo: Todo;
  toggle: (id: number) => void;
  remove: (id: number) => void;
}

const TodoListItem = ({ todo, toggle, remove }: ITodoListItem) => {
  return (
    <div key={todo.id} className="TodoListItem">
      <div className={todo.done ? 'checkbox checked' : 'checkbox'} onClick={() => toggle(todo.id)}>
        {todo.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove" onClick={() => remove(todo.id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
