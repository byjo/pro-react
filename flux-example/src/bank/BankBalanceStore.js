import { EventEmitter } from 'fbemitter';
import { ReduceStore } from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import bankConstants from './../constants';

let balance = 0;

class BankBalanceStore extends ReduceStore {
	getInitialState() {
		return 0;
	}

	reduce(state, action) {
		switch (action.type) {
			case bankConstants.CREATE_ACCOUNT :
				return 0;

			case bankConstants.WITHDRAW_FROM_ACCOUNT :
				return state - action.amount;

			case bankConstants.DEPOSIT_INTO_ACCOUNT :
				return state + action.amount;
		}
	}
}

export default new BankBalanceStore(AppDispatcher);

// let __emitter = new EventEmitter();
// const CHANGE_EVENT = 'change';
// let balance = 0;
// let BankBalanceStore = {

// 	getState() {
// 		return balance
// 	},

// 	addListener : (callback) => {
// 		return __emitter.addListener(CHANGE_EVENT, callback);
// 	}
// };

// // 스토어는 소유한 상태(balance)를 저장하며, 자신을 디스패쳐에 등록한다(action에 따라 register)
// // 액션이 발송되어 호출 되었을 때, 자신이 연관되어 있다면 내부 상태를 변경(balance 변경)하고 이벤트를 생성해서 스토어의 변경을 뷰에 알린다(emit)
// BankBalanceStore.dispatchToken = AppDispatcher.register((action) => {
// 	switch (action.type) {
// 		case bankConstants.CREATE_ACCOUNT :
// 			balance = 0;
// 			__emitter.emit(CHANGE_EVENT);
// 			break;
// 		case bankConstants.WITHDRAW_FROM_ACCOUNT :
// 			balance = balance - action.amount;
// 			__emitter.emit(CHANGE_EVENT);
// 			break;
// 		case bankConstants.DEPOSIT_INTO_ACCOUNT :
// 			balance = balance + action.amount;
// 			__emitter.emit(CHANGE_EVENT);
// 			break;
// 	}
// });

// export default BankBalanceStore;