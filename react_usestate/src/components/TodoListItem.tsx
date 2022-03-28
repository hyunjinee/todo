import React from 'react';
import { Todo } from '../store';

interface ITodoListItem {
  todo: Todo;
}

const TodoListItem = ({ todo }: ITodoListItem) => {
  // const { id, text, checked } = todo;

  return <div className="TodoListItem">{todo}</div>;
};

export default TodoListItem;
