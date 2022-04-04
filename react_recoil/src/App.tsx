import React from 'react';
import { RecoilRoot } from 'recoil';

import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './scss/App.scss';

const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <TodoTemplate>
        <div className="title">투두투두</div>
        <TodoAdd />
        <TodoList />
      </TodoTemplate>
    </RecoilRoot>
  );
};

export default App;
