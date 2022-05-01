import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './scss/App.scss';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <TodoTemplate>
        <div className="title">투두투두</div>
        <TodoAdd />
        <TodoList />
      </TodoTemplate>
    </Provider>
  );
};

export default App;
