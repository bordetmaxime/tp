export const SET_MEMBER = 'SET_MEMBER';
export const SET_ERR_ADD_MEMBER = 'SET_ERR_ADD_MEMBER';
export const SET_MEMBER_MODIFY = 'SET_MEMBER_MODIFY';
export const SET_INPUT_MEMBER = 'SET_INPUT_MEMBER';
export const SUBMIT_ADD_MEMBER = 'SUBMIT_ADD_MEMBER';
export const GET_MEMBER = 'GET_MEMBER';
export const SAV_MEMBER = 'SAV_MEMBER';
export const SET_MODIFY = 'SET_MODIFY';
export const PATCH_MEMBER = 'PATCH_MEMBER';
export const DEL_REDIRECT_INFO = 'DEL_REDIRECT_INFO';
export const DEL_STATE_MEMBER = 'DEL_STATE_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';
export const DELETE_MSG = 'DELETE_MSG';
export const RESET_DELETE_MSG = 'RESET_DELETE_MSG';
export const SET_OPEN = 'SET_OPEN';


export const setMember = ( msg ) => ({
	type: SET_MEMBER,
	msg,
});

export const setErrAddMember = ( msg ) => ({
	type: SET_ERR_ADD_MEMBER,
	msg,
});

export const InputMember = ( name, value ) => ({
	type: SET_INPUT_MEMBER,
	name,
	value,
});

export const submitAddMember = () => ({
	type: SUBMIT_ADD_MEMBER,
});

export const getMember = (memberId) => ({
	type: GET_MEMBER,
	payload: memberId,
});

export const savMember = ({ birth, bottom_size, hobbies, member_email, member_firstname, member_id, member_lastname, member_username, school, shoes_size, size, top_size, label, roleid }) => ({
	type: SAV_MEMBER,
	birth, bottom_size, hobbies, member_email, member_firstname, member_id, member_lastname, member_username, school, shoes_size, size, top_size, label, roleid,
});

export const patchMember = ({}) => ({
	type: PATCH_MEMBER,
});

export const setMemberModify = (msg) => ({
	type: SET_MEMBER_MODIFY,
	msg,
});

export const delRedirectInfo = () => ({
	type: DEL_REDIRECT_INFO,
});

export const delStateMember = () => ({
	type: DEL_STATE_MEMBER,
});

export const deleteMember = () => ({
	type: DELETE_MEMBER,
});

export const deleteMsg = (msg) => ({
	type: DELETE_MSG,
	msg,
});

export const resetDeleteMsg = () => ({
	type: RESET_DELETE_MSG,
});

export const setOpen = () => ({
	type: SET_OPEN,
});
