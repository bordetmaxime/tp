import { CHILD_SELECTED, RESET_CHILD_VALUE, SET_CHILDS_MEMBERS, SET_MEMBERS } from '../actions/family';

export const initialState = {
	members: [],
	childMembers: [],
	familyName: '',
	familyId: '',
	childSelectedValue: '',
  childSelectedName: '',
};

console.log("the state", initialState.member)

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_MEMBERS:
			return {
				...state,
				familyName: action.familyName,
				familyId: action.familyId,
				members: action.members,
			};
    
		case SET_CHILDS_MEMBERS:
			return {
				...state,
				childMembers: action.childs,
			};

		case CHILD_SELECTED:
			return {
				...state,
				childSelectedValue: action.value,
        childSelectedName: action.name,
			};

    case RESET_CHILD_VALUE:
      return {
        ...state,
        childSelectedValue: '',
      }
    
		default:
			return state;
	}
};

export default reducer;
