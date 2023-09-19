import { RESET_ITEMS, SET_ITEMS, SET_LISTS, SET_NEW_LIST, SET_NEW_ITEM, INPUT_ADD_ITEM, INPUT_ADD_LIST, SET_OPEN_MODAL_LIST, SET_LIST_MODIF, INPUT_MODIF_LISTNAME, SET_OPEN_POPUP_ITEM, DELETE_ITEM_MSG, SET_OPEN_POPUP_LIST, DELETE_LIST_MSG, RESET_LISTS } from '../actions/todolist';

export const initialState = {
	lists: [],
	items: [],
	inputAddList: '',
	inputModifValue: '',
	inputModifDeadline: '',
	newListMsg: '',
	inputNewItem: '',
	inputNewDeadline: '',
	newItemMsg: '',
	openModalList: false,
	targetId: '',
	modifListMsg: '',
	itemId: '',
	open: false,
	deleteItemMsg: '',
	deleteListMsg: '',
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_LISTS:
			return {
				...state,
				lists: action.data,
			};
    
		case SET_ITEMS:
			return {
				...state,
				items: action.data,
			};

		case RESET_ITEMS:
			return {
				...state,
				items: [],
			};

    case RESET_LISTS:
      return {
        ...state,
        lists: [],
      }

		case INPUT_ADD_LIST:
			return {
				...state,
				inputAddList: action.value,
			};

		case INPUT_MODIF_LISTNAME:
			return {
				...state,
				inputModifValue: action.value,
			};
    
		case SET_NEW_LIST:
			return {
				...state,
				newListMsg: action.msg,
				inputAddList: '',
			};

		case INPUT_ADD_ITEM:
			return {
				...state,
				[ action.name ]: action.value,
			};
      
		case SET_NEW_ITEM:
			return {
				...state,
				newItemMsg: action.msg,
				inputNewItem: '',
				inputNewDeadline: '',
			};

		case SET_OPEN_MODAL_LIST:
			return {
				...state,
				openModalList: !state.openModalList,
				targetId: action.id,
				inputModifValue: action.name,
			};

		case SET_LIST_MODIF:
			return {
				...state,
				modifListMsg: action.msg,
				openModalList: false,
				targetId: '',
			};

		case SET_OPEN_POPUP_ITEM:
			return {
				...state,
				open: !state.open,
				itemId: action.itemId,
			};
    
		case DELETE_ITEM_MSG:
			return {
				...state,
				deleteItemMsg: action.msg,
				itemId: '',
				open: !state.open,
			};

		case SET_OPEN_POPUP_LIST:
			return {
				...state,
				open: !state.open,
				targetId: action.listId,
			};
      
		case DELETE_LIST_MSG:
			return {
				...state,
				deleteListMsg: action.msg,
				targetId: '',
				open: !state.open,
			};

		default:
			return state;
	}
};

export default reducer;
