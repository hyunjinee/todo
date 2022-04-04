# Context api를 이용한 만개의 투두 상태관리 및 성능 측정

Context api를 활용해 TodosStateContext와 TodosDispatchContext를 만들어서 전역상태로 관리했다. 그리고 useState에서와 마찬가지로 10000개의 Todo를 렌더링 하였고 React의 Profiler를 이용해 성능을 측정했다. 우선 React.memo를 TodoList 컴포넌트와 TodoListItem컴포넌트에 각각 적용하지 않았을 때 성능을 보자.

<!-- 아래의 결과를 봅시다. 만개의 투두중에 5개를 토글해보겠습니다. TodoList(16.8 of 779.2)ms

사용자가 사용할 때 사용하기 불편할 정도로 느렸다.

https://user-images.githubusercontent.com/63354527/160429468-36960aa2-ce69-422b-8e33-d8c36b00aedf.mp4 -->

## React.memo 적용

<!-- 아래는 10000개의 투두리스트 중에서 5개를 토글 했을 때 결과를 보여줍니다.

투두리스트를 렌더링 하는데 결과적으로 걸리는 시간은 TodoList (Memo)(18.3 of 26.2)ms 입니다.

https://user-images.githubusercontent.com/63354527/160429483-76535056-1045-4ee7-a0ae-fd99fee8feda.mp4 -->

## _결과_

<!--
React.memo를 TodoList 및 TodoListItem에 적용하였습니다. 우선, item들을 토글할 때 분명 하나를 토글했는데 전체를 다 리렌더링하는 매우 안좋은 구조를 가지고 있었습니다. 이를 개선하기 위해 React.memo를 사용하였습니다. props가 바뀌지 않는다면 리렌더링 할 필요가 없습니다.

투두들이 props가 바뀔 때 리렌더링 되지 않도록 하기 위해서 useCallback함수를 적용해서 removeTodo, toggleTodo를 감쌌습니다. 원래 함수는 아래와 같았습니다.

```ts
const onToggle = useCallback(
  id => {
    setTodos(
      todos.map(todo =>
      todo.id ===id ? {...todo , checked: !todo.checked} : todo})
    )
  }, [todos]
)
```

위와 같이 선언한다면 todos가 바뀔 때 onToggle 함수가 새로 만들어집니다. 이를 개선하기 위해 useState의 함수형 업데이트를 사용했습니다. 개선된 코드는 아래와 같습니다.

```ts
const toggleTodo = useCallback(
  (id: number) => setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))),
  [],
);
```

위와 같이 함으로써 toggleTodo라는 다시 만들어지지 않고 그에 따라서 toggleTodo를 props로 전달했을 때 TodoListItem에서 props가 바뀔 일이 없습니다. 따라서 변화가 없으므로 React.memo를 적용했을 경우 리렌더링이 일어나지 않습니다.

`상태관리를 React.useState만를 이용해서 어플케이션을 작성하였고(다른 비교군은 context api, redux, recoil등으로 진행) 렌더링 최적화를 useCallback과 React.memo로 해준 결과, 만개의 투두를 렌더링하는데 약 30배의 성능차이를 보였습니다.`

마지막으로 아래는 크롬의 lighthouse를 이용한 성능 결과 보고서입니다. -->

### 웹 환경

<img width="651" alt="image" src="https://user-images.githubusercontent.com/63354527/161393517-bc2a6c86-ccd4-4e21-a8d8-a01155519026.png">

### 모바일 환경

<img width="651" alt="image" src="https://user-images.githubusercontent.com/63354527/161393567-19601b86-0ce8-42f9-8449-c65a52504c8a.png">
