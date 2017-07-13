import AppDispatcher from "./AppDispatcher";
import bankConstans from "./../constants";

let BankActions = {
	// 액션 생성자 : 액션을 정의, 발송하는 함수 
	createAccount() {
		// 액션 : 액션은 type, 선택적 페이로드를 포함하는 객체이다 
		AppDispatcher.dispatch({
			type : bankConstans.CREATE_ACCOUNT,
			amount : 0
		});
	},

	depositIntoAccount(amount) {
		AppDispatcher.dispatch({
			type : bankConstans.DEPOSIT_INTO_ACCOUNT,
			amount : amount
		});	
	},

	withdrawFromAccount(amount) {
		AppDispatcher.dispatch({
			type : bankConstans.WITHDRAW_FROM_ACCOUNT,
			amount : amount
		});		
	}
}

export default BankActions;