import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store';
import { Todo, todosActions } from '../store/todos';

interface ITodoListItem {
  todo: Todo;
}

const TodoListItem = ({ todo }: ITodoListItem) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div key={todo.id} className="TodoListItem">
      <div
        className={todo.done ? 'checkbox checked' : 'checkbox'}
        onClick={() => dispatch(todosActions.toggleTodo(todo.id))}
      >
        {todo.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove" onClick={() => dispatch(todosActions.deleteTodo(todo.id))}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
