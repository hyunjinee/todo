import React, { useState, useCallback, useRef, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { data } from '../data';
import { AppDispatch } from '../store';
import { todosActions } from '../store/todos';
import './TodoAdd.scss';

const TodoAdd = () => {
  const [newTodo, setNewTodo] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => inputRef.current?.focus(), []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(todosActions.addTodo(newTodo));
      setNewTodo('');

      inputRef.current?.focus();
    },
    [newTodo, dispatch],
  );

  return (
    <form className="TodoAdd" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={newTodo} onChange={onChange} ref={inputRef} />
      <button type="submit">
        <MdAdd />
      </button>
      <div className="fire" onClick={() => dispatch(todosActions.manyTodo(data))}>
        🔥
      </div>
    </form>
  );
};

export default TodoAdd;
