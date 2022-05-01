import { Todo } from './store/todos';

export const data: Todo[] = [];

for (let i = 1; i <= 10000; i++) {
  data.push({
    id: i,
    text: `${i}번째 할일`,
    done: false,
  });
}
