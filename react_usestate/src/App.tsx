import React, { useCallback, useState } from 'react';

import { Todo } from './store';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './scss/App.scss';

// eslint-disable-next-line import/namespace
import { data } from './data';

const App = (): JSX.Element => {
  // const [todos, setTodos] = useState(data);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback(
    (todos: Todo[], text: string) =>
      setTodos([
        ...todos,
        {
          id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
          text,
          done: false,
        },
      ]),
    [],
  );

  const toggleTodo = useCallback(
    (id: number) => setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))),
    [],
  );

  const removeTodo = useCallback((id: number) => setTodos((todos) => todos.filter((todo) => todo.id !== id)), []);

  return (
    <TodoTemplate>
      <div className="title">투두투두</div>
      <TodoAdd todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <div className="fire" onClick={() => setTodos(data)}>
        🔥
      </div>
    </TodoTemplate>
  );
};

export default App;
