import { combineReducers } from 'redux';


import userReducer from './user';
import inscriptionReducer from './inscription';
import familyReducer from './family';
import memberReducer from './member';
import todolistReducer from './todolist';
import roleReducer from './role';
import { SET_LOGGED_OUT } from '../actions/user';

const appReducer = combineReducers({
	user: userReducer,
	inscription: inscriptionReducer,
	family: familyReducer,
	member: memberReducer,
	todolist: todolistReducer,
	role: roleReducer,
});

const rootReducer = (state, action) => {
	if (action.type === SET_LOGGED_OUT) {
		return appReducer(undefined, action);
	}
	return appReducer(state, action);
};

export default rootReducer;
