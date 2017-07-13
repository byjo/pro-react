# CAHPTER 04

## js 의 함수 선언
```
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.DropTarget()
    };
}

let collectDrag = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource()
    };
}

```
둘은 완전히 같은가?
(http://blog.xcoda.net/65)
(http://insanehong.kr/post/javascript-function/)
- hoisting 

## drag-n-drop
* terms
    - monitor
    - connect
    - props
    - spec
    - collect

* 헐 두 번 감쌈;;;;

## HOC (High Order Componet)
`A higher-order component is a function that takes a component and returns a new component for reusing component logic`

* paramter
    - type
    - spec object
        + interface 내 함수를 fill 한다고 생각하면 되나...
    - collecting function
        + prop 주입을 하는데 
        + 이걸 function을 이용하여 수행한다? 

- composition?
(https://facebook.github.io/react/docs/higher-order-components.html)
- HOC 이용, cluster/contents/keyword는 하나의 componet로 공통화 할 수 있지 않을까?

## js decorator


## deprecated things
* CSSTransitionGroup
```
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
```
https://www.npmjs.com/package/react-addons-css-transition-group


## QUESTIONS
- p.158 
> 여기서 주목할시실은 모듈이 Container컴포넌트를 내보내는 것이 아니라Container에 기반을 두는 DragDropContext고차 컴포넌트에 모든 드래그 앤드 드롭 상태와 힘수가 주입된디는 점이다

## Reference
- (https://www.sitepoint.com/immutability-javascript/)

