import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const todos = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: state.length + 1, text: action.payload, done: false });
      return state;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state = state.filter((todo) => todo.id !== action.payload);
      return state;
    },
    manyTodo: (state, action: PayloadAction<Todo[]>) => {
      state = action.payload;
      return state;
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state = state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
      return state;
    },
  },
});
export const todosActions = { ...todos.actions };
export default todos.reducer;

// const toggleTodo = useCallback(
//   (id: number) => setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))),
//   [],
// );
