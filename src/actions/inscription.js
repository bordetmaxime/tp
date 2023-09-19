export const SET_INSCRIPTION = 'SET_INSCRIPTION';
export const SUBMIT_INSCR = 'SUBMIT_INSCR';
export const SET_ERR_INSCR = 'SET_ERR_INSCR';
export const SET_INPUT_INSCR = 'SET_INPUT_INSCR';
export const DEL_REDIRECTION = 'DEL_REDIRECTION';

export const setInscription = ( msg ) => ({
	type: SET_INSCRIPTION,
	msg,
});

export const submitInscr = () => ({
	type: SUBMIT_INSCR,
});

export const setErrInscr = ( msg ) => ({
	type: SET_ERR_INSCR,
	msg,
});

export const inputInscr = ( name, value ) => ({
	type: SET_INPUT_INSCR,
	name,
	value,
});

export const delRedirection = () => ({
  type: DEL_REDIRECTION,
});
