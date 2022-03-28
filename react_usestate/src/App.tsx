import React from 'react';

import { useTodos } from './store';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './scss/App.scss';

const App = (): JSX.Element => {
  const [todos, setTodos] = useTodos([]);
  return (
    <TodoTemplate>
      <div className="title">투두투두</div>
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoTemplate>
  );
};

export default App;
