import type { RecoilState } from 'recoil';
import { atom } from 'recoil';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export type TodoListType = Todo[];

export const todosState: RecoilState<Todo[]> = atom({
  key: 'todos',
  default: [] as Todo[],
});
