import { SET_ROLE } from '../actions/role';

export const initialState = {
	roles: [],
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_ROLE:
			return {
				...state,
				roles: action.roles,
			};
    
		default:
			return state;
	}
};

export default reducer;
