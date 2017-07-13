# CHAPTER 06

## flux
> Flux is the application architecture Facebook uses to build JavaScript applications. It's based on a unidirectional data flow. 

(https://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html)
즉, 자바스크립트 디자인 패턴.

* Action
    - type
    - payload 가 뭘까? 정보..?
    - (+) ActionCreator
        + action object를 dispatcher에 전달 
            * Dispatcher.dispatch() 하는 것 같은데 ...
* Store
    - 상태를 갖고 있으며, 스스로 상태를 update
    - 각 스토어는 자신을 dispatcher에 등록(register)
    - action의 type과 이에 대한 callback ...?
* View
* (+) Dispatcher
    - The dispatcher is a singleton, and operates as the central hub of data flow
    - dispatch() 등록된 스토어로 액션을 발송 

cf. redux
flux를 사용하기 쉽게 도와주는 라이브러리 

## EXAMPLE 01. BANK
### Flux Util Store
* Store
* ReduceStore
    - Reduce ?
    - 
* MapStore
* flux Container
    - React Component에 getStores, calculateState 는 원래 있는건가? 
    - Container 내 App이 가져야 하는 것 같은데 ? 
    - Container가 implements 해야 할 function 들 
 

## QUESTIONS

### Bank
```
class App extends Component {
    constructor() {
        super(...arguments);
        BankActions.createAccount();
        // state는 App과 Store 두 군데에 존재 하는구만. 
        // 그렇지 실제 렌더링이 될려면 state가 있어야 하니까. 아니 속성으로 그리면 안됨?
        this.state = {
            balance : BankBalanceStore.getState()
        }
    }
}
```
* state 어디에 있는겨 
    - => 고차 함수를 사용하면 더 쉽다

### ES6 
```
class AppDispatcher extends Dispatcher {
    dispatch(action = {}) {
        console.log("Dispatch", action);
        super.dispatch(action);
    }
}
export default new AppDispatcher();
```
* (action = {}) action의 type 지정?
* export default 의 의미는?
    - import / export
* super(...arguments);
