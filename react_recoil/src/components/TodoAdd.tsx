import React, { useState, useCallback, useRef, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';

import { todosState } from '../store';
import { data } from '../data';
import './TodoAdd.scss';

const TodoAdd = () => {
  const [newTodo, setNewTodo] = useState('');
  const setTodos = useSetRecoilState(todosState);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      addTodo(newTodo);
      setNewTodo('');

      inputRef.current?.focus();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newTodo],
  );

  const addTodo = useCallback(
    (text: string) =>
      setTodos((todos) => [
        ...todos,
        {
          id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
          text,
          done: false,
        },
      ]),
    [],
  );

  return (
    <form className="TodoAdd" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={newTodo} onChange={onChange} ref={inputRef} />
      <button type="submit">
        <MdAdd />
      </button>
      <div className="fire" onClick={() => setTodos(data)}>
        🔥
      </div>
    </form>
  );
};

export default TodoAdd;
