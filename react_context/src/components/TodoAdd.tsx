import React, { useCallback, useRef, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { useTodosDispatch } from '../store';
import './TodoAdd.scss';

const TodoAdd = () => {
  const [newTodo, setNewTodo] = React.useState('');
  const dispatch = useTodosDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch({ type: 'CREATE', text: newTodo });
      setNewTodo('');

      inputRef.current?.focus();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newTodo],
  );

  return (
    <>
      <form className="TodoAdd" onSubmit={onSubmit}>
        <input placeholder="할 일을 입력하세요" value={newTodo} onChange={onChange} ref={inputRef} />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
      <div
        className="fire"
        onClick={() => {
          for (let i = 0; i < 10000; i++) {
            dispatch({ type: 'CREATE', text: `할일 ${i}` });
          }
        }}
      >
        🔥
      </div>
    </>
  );
};

export default TodoAdd;
