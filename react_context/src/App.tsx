import React from 'react';

import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { TodosContextProvider } from './store';
import './scss/App.scss';

const App = (): JSX.Element => {
  return (
    <TodosContextProvider>
      <TodoTemplate>
        <div className="title">투두투두</div>
        <TodoAdd />
        <TodoList />
      </TodoTemplate>
    </TodosContextProvider>
  );
};

export default App;
