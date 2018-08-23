import {
	HOMEINIT,
} from '../actions/home';

const loads = (state = {}, action) => {
	switch (action.type) {
		case HOMEINIT:
			return Object.assign({},state,{[action.name]:action.initData});
		default:
			return state
	}
}
export default loads