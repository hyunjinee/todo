import React, { useCallback, useRef, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { data } from '../data';
import useStore from '../store';
import './TodoAdd.scss';

const TodoAdd = () => {
  const store = useStore();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.addTodo();
    inputRef.current?.focus();
  }, []);

  return (
    <form className="TodoAdd" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={store.newTodo}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => store.setNewTodo(event.target.value)}
        ref={inputRef}
      />
      <button type="submit">
        <MdAdd />
      </button>
      <div className="fire" onClick={() => store.manyTodo(data)}>
        🔥
      </div>
    </form>
  );
};

export default TodoAdd;
