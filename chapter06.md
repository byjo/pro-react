# CHAPTER 06

## FLUX
> Flux is the application architecture Facebook uses to build JavaScript applications. It's based on a unidirectional data flow. 

*즉, 자바스크립트 디자인 패턴.*


### Flux Simple Diagram
![](https://haruair.github.io/flux/img/flux-simple-f8-diagram-1300w.png)

* Action
    - `App에서 일어나는 일`
    - 쉽게 생각하면 User Interation, 이에 따른 내부 action도 있을 수 있음
    - type property, (optional) payload를 가진 object  
        - payload 가 뭘까? 정보..?
* Dispatcher
    - `The dispatcher operates as the central hub of data flow`
    - 등록된 스토어로 액션을 발송 
* Store
    - `데이터(상태)를 갖고 있으며, 상태 업데이트 시 view에게 새로운 데이터를 전달`
    - MVC의 model과 비슷하나, 스스로만이 상태를 update 가능하다
    - 상태 업데이트시 이벤트를 생성 & 방출하여 변경을 알린다 
* View
    - `말 그대로 뷰... 데이터를 화면에 그린다`
    - React Component
    - Controller View
        - react component는 부모 component -> 자식 component로 props를 통해 데이터 전달 
        - 부모 component로, controller의 역할도 가진다 

cf. redux  
flux를 사용하기 쉽게 도와주는 라이브러리 
궁금하면 [여기](https://deminoth.github.io/redux/)로 ^^...





## EXAMPLE 01. BANK
*목표 : 한 계좌의 잔고를 알 수 있고, 입금과 출금을 할 수 있는 페이지를 만들자*
### 구현해야 할 것 
* Action
    - createAccount
    - depositIntoAccount
    - withdrawFromAccount
* Dispatcher
* Store
    - BankBalanceStore : 잔고 데이터 관리 
    - BankRewardStore : 잔고에 따른 등급 관리 
* View
    - 잔고를 보여준다
    - user가 deposit/withdraw 행위를 할 수 있는 요소를 제공한다



### Flux Diagram
![](https://facebook.github.io/react/img/blog/flux-diagram.png)

* ActionCreator
    - action을 정의하고, action object를 dispatcher에 전달 
        + Dispatcher의 dispatch() 메소드를 사용 
    ```
    let BankActions = {
        createAccount() {
            AppDispatcher.dispatch({
                type : bankConstans.CREATE_ACCOUNT,
                amount : 0
            });
        }
        ...
    ```
* Action
* Dispatcher
    - 자신에게 등록된 스토어로 액션을 발송 
    - Dispatcher는 자신의 앞 뒤 요소들에 method만 제공하는 느낌 
* Store
    - 각 스토어는 자신을 dispatcher에 등록(register)
        + action에 따른 callback
    ```
    BankBalanceStore.dispatchToken = AppDispatcher.register((action) => {
        switch (action.type) {
            case bankConstants.WITHDRAW_FROM_ACCOUNT :
                balance = balance - action.amount;
                __emitter.emit(CHANGE_EVENT);
                break;
            ...
        }
    }
    ```
* View
    - (렌더링 하는데) 필요한 상태를 관리하는 스토어에 이벤트 리스너를 등록 
    - 스토어 변경 시 방출된 이벤트를 통해, 자신의 상태를 변화 & re-render
    ```
    class App extends Component {
        constructor() {
            super(...arguments);
            BankActions.createAccount();
            this.state = {
                balance : BankBalanceStore.getState()
            }
        }

        componentDidMount() {
            this.storeSubscription = BankBalanceStore.addListener(
                data => this.handleStoreChange(data)
            );
        }

        componentWillUnmount() {
            this.storeSubscription.remove();
        }

        handleStoreChange() {
            this.setState({
                balance : BankBalanceStore.getState()
            });
        }
        ...
    }
    ```


### Flux Util Store
* Store
    - ReduceStore
    - MapStore
* flux Container
    - High Order Component
    ```
    class App extends Component {
        ...
    }

    App.getStores = () => ([BankBalanceStore, BankRewardStore]);
    App.calculateState = (prevState) => ({
        balance : BankBalanceStore.getState(),
        rewardsTier : BankRewardStore.getState()
    });

    const AppContainer = Container.create(App);
    ``` 
    - getStores, calculateState : Container가 implements 해야 할 function 들 
 




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



## Reference
* https://haruair.github.io/flux/docs/overview.html#content
* https://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html
