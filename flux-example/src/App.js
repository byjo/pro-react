import React, { Component } from 'react';
import { Container } from 'flux/utils';
import BankBalanceStore from './bank/BankBalanceStore';
import BankRewardStore from './bank/BankRewardStore';
import BankActions from './bank/BankAction';
import './App.css';

class App extends Component {
	constructor() {
		super(...arguments);
		BankActions.createAccount();
		// state는 App과 Store 두 군데에 존재 하는구만. 
		// 그렇지 실제 렌더링이 될려면 state가 있어야 하니까. 아니 속성으로 그리면 안됨?
		// this.state = {
		// 	balance : BankBalanceStore.getState()
		// }
	}

	// componentDidMount() {
	// 	this.storeSubscription = BankBalanceStore.addListener(
	// 		data => this.handleStoreChange(data)
	// 	);
	// }

	// componentWillUnmount() {
	// 	this.storeSubscription.remove();
	// }

	// handleStoreChange() {
	// 	this.setState({
	// 		balance : BankBalanceStore.getState()
	// 	});
	// }

	deposit() {
		// ref 사용
		BankActions.depositIntoAccount(Number(this.refs.amount.value));
		this.refs.amount.value = '';
	}

	withdraw() {
		BankActions.withdrawFromAccount(Number(this.refs.amount.value));
		this.refs.amount.value = '';
	}

	render() {
		return (
			<div>
				<header>Bank</header>
				<h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
				<h2>Your Points Reward is {this.state.rewardsTier}</h2>
				<div className="amount">
					<input type="text" placeholder="Enter Amount" ref="amount" />
					<br />
					<button onClick={this.withdraw.bind(this)}>Withdraw</button>
					<button onClick={this.deposit.bind(this)}>Deposit</button>
				</div>
			</div>
		);
	}  
}
// export default App;

// Container 이려면 꼭 implements 해야할 func.
App.getStores = () => ([BankBalanceStore, BankRewardStore]);
App.calculateState = (prevState) => ({
	balance : BankBalanceStore.getState(),
	rewardsTier : BankRewardStore.getState()
});

const AppContainer = Container.create(App);
export default AppContainer;


