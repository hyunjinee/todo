import React from 'react';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({ ...todo, text: todo.id === id ? text : todo.text }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] => todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

export const useTodos = (initial: Todo[]) => React.useState<Todo[] | any>(initial);
export type UseTodosType = ReturnType<typeof useTodos>;
export type TodosType = UseTodosType[0];
export type setTodosType = UseTodosType[1];
