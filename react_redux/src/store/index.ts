import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todosReducer from './todos';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
