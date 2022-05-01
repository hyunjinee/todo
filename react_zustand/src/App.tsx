import React from 'react';

import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './scss/App.scss';

const App = (): JSX.Element => {
  return (
    <TodoTemplate>
      <div className="title">투두투두</div>
      <TodoAdd />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;
