import 	{ observable, action } from 'mobx'

export default class GlobalStore {
	@observable number = 0



	@action
	addOne = () => {
		this.number++
	}

}