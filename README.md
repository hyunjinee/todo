# 투두투두

투두투두는 많은 상태관리 라이브러리를 경험해보고, 각 상태관리 라이브러리의 성능 측정 및 비교를 하기위해 만든 프로젝트입니다.

## Description

- TypeScript
- React
- Context API, Redux(RTK), Recoil, Zustand

## Result

|                                             링크                                              | 상태관리 방법 | 웹 성능 | 모바일 성능 |
| :-------------------------------------------------------------------------------------------: | :-----------: | :-----: | :---------: | --------------------------------------------------------------------------------------------------------------- |
| <a href="https://github.com/hyunjinee/todo/tree/master/react_usestate" target="_blank">🌐</a> |   useState    |   95    |     62      |                                                                                                                 |
| <a href="https://github.com/hyunjinee/todo/tree/master/react_usestate" target="_blank">🌐</a> |  Redux(RTK)   |   95    |     62      |
|  <a href="https://github.com/hyunjinee/todo/tree/master/react_recoil" target="_blank">🌐</a>  |    Recoil     |   92    |     51      |
| <a href="https://github.com/hyunjinee/todo/tree/master/react_usestate" target="_blank">🌐</a> |  Context API  |   79    |     57      | <a href="https://github.com/hyunjinee/Algorithm/blob/master/solved.ac/greedy/13164.py" target="_blank">풀이</a> |

웹을 기준으로 useState == Redux(RTK) > Recoil > Context API 순으로 성능을 측정하였다. 앞으로 계속 공부하고 싶은 상태관리 방법이 있으면 추가하고, 기존에 개발했던 것은 성능을 올리는 방법에 대한 고민을 꾸준히 해보겠다.

## ✅ cypress를 이용한 e2e 테스트

https://user-images.githubusercontent.com/63354527/161371986-c6c1ed57-9353-4a75-90ae-320f5f412607.mov
