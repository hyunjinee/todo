import React, { useCallback } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';

import { Todo, todosState } from '../store';

interface ITodoListItem {
  todo: Todo;
}

const TodoListItem = ({ todo }: ITodoListItem) => {
  const setTodos = useSetRecoilState(todosState);

  const toggleTodo = useCallback(
    (id: number) => setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))),
    [],
  );

  const removeTodo = useCallback((id: number) => setTodos((todos) => todos.filter((todo) => todo.id !== id)), []);
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
