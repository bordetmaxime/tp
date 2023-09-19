export const GET_MEMBERS = 'GET_MEMBERS';
export const SET_MEMBERS = 'SET_MEMBERS';
export const SET_CHILDS_MEMBERS = 'SET_CHILDS_MEMBERS';
export const CHILD_SELECTED = 'CHILD_SELECTED';
export const RESET_CHILD_VALUE = 'RESET_CHILD_VALUE';


export const setMembers = ({ allMemberAndRoles, famille_id, nom }) => ({
	type: SET_MEMBERS,
	members: allMemberAndRoles,
	familyName: nom,
	familyId: famille_id,
});

export const getMembers = () => ({
	type: GET_MEMBERS,
});

export const setChildsMembers = (childs) => ({
	type: SET_CHILDS_MEMBERS,
	childs,
});

export const childSelected = (value, name) => ({
	type: CHILD_SELECTED,
	value,
  name,
});

export const resetChildValue = () => ({
  type: RESET_CHILD_VALUE,
});
