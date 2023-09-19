import { PLAY_LOADER, SET_ERR_LOGIN, SET_LOGGED_IN, SET_LOGGED_OUT, SET_LOGIN, SET_PASSWORD, SET_TOKEN, SET_USERNAME } from '../actions/user';

export const initialState = {
	familyName: '',
	userName: '',
	lastname: '',
	firstname: '',
	roleId: '',
	dateBirth: '',
	email: '',
	confirmEmail: '',
	password: '',
	confirmPassword: '',
	token: '',
	member: {},
	family: {},
	loggedIn: false,
	route: '',
	// State Messages
	errLogin: '',
	loader: false,
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_LOGIN:
			return {
				...state,
				// firstname: action.firstname,
				token: action.token,
				password: '',
				member: action.member,
				family: action.family,
				// Remise à zero des msg pour ne pas en avoir lors de la déconnexion qui nous renvoie sur la page login
				inscriptSucces: '',
				errLogin: '',
				errInscr: '',
				route: '/home',
			};
    
		case SET_ERR_LOGIN:
			return {
				...state,
				errLogin: action.msg,
				loader: !state.loader,
			};
			// changement du state avec les valeurs du champ login
		case SET_USERNAME:
			return {
				...state,
				userName: action.payload,
			};
			// changement du state avec les valeurs du champ password
		case SET_PASSWORD:
			return {
				...state,
				password: action.payload,
			};

		case SET_LOGGED_IN:
			return {
				...state,
				loggedIn: action.payload,
				route: '',
			};

		case SET_LOGGED_OUT:
			return {
				...state,
				loggedIn: action.payload,
				token: '',
				userName: '',
			};

		case PLAY_LOADER:
			return {
				...state,
				loader: !state.loader,
			};
    
		default:
			return state;
	}
};

export default reducer;
