import create from 'zustand';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// Zustand implementation

type Store = {
  todos: Todo[];
  newTodo: string;
  addTodo: () => void;
  setNewTodo: (text: string) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
  manyTodo: (todos: Todo[]) => void;
};

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] => todos.filter((todo) => todo.id !== id);

const useStore = create<Store>((set) => ({
  todos: [],
  newTodo: '',
  addTodo() {
    set((state) => ({
      ...state,
      todos: addTodo(state.todos, state.newTodo),
      newTodo: '',
    }));
  },
  setNewTodo(text: string) {
    set((state) => ({
      ...state,
      newTodo: text,
    }));
  },
  toggle: (id: number) => {
    set((state) => ({
      ...state,
      todos: toggleTodo(state.todos, id),
    }));
  },
  remove: (id: number) => {
    set((state) => ({
      ...state,
      todos: removeTodo(state.todos, id),
    }));
  },
  manyTodo: (todos: Todo[]) => {
    set((state) => ({
      ...state,
      todos,
    }));
  },
}));

export default useStore;
