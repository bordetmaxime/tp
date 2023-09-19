import { SET_ERR_INSCR, SET_INPUT_INSCR, SET_INSCRIPTION, DEL_REDIRECTION } from '../actions/inscription';

export const initialState = {
	familyName: '',
	lastname: '',
	firstname: '',
	roleId: '',
	dateBirth: '',
	email: '',
	confirmEmail: '',
	password: '',
	confirmPassword: '',
	redirection: '',
	// state messages
	inscriptMsgSucces: '',
	inscriptionMsgErr: '',
	loader: false,
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_INSCRIPTION:
			return {
				...state,
				inscriptMsgSucces: action.msg,
				redirection: '/login',
			};

		case SET_INPUT_INSCR:
			return {
				...state,
				[ action.name ]: action.value,
			};

		case SET_ERR_INSCR:
			return {
				...state,
				inscriptionMsgErr: action.msg,
			};

		case DEL_REDIRECTION:
			return {
				...state,
				redirection: '',
			};
    
		default:
			return state;
	}
};

export default reducer;
