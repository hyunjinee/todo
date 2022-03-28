import React, { useState, useCallback, useRef, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { setTodosType, TodosType, addTodo } from '../store';
import './TodoAdd.scss';

interface ITodoAdd {
  todos: TodosType;
  setTodos: setTodosType;
}

const TodoAdd = ({ todos, setTodos }: ITodoAdd) => {
  const [newTodo, setNewTodo] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setTodos(addTodo(todos, newTodo));
      setNewTodo('');

      inputRef.current?.focus();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newTodo],
  );

  return (
    <form className="TodoAdd" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={newTodo} onChange={onChange} ref={inputRef} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoAdd;
