export const GET_ROLE = 'GET_ROLE';
export const SET_ROLE = 'SET_ROLE';

export const getRole = () => ({
	type: GET_ROLE,
});

export const setRole = (roles) => ({
	type: SET_ROLE,
  roles,
});

