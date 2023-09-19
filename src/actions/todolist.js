export const GET_LISTS = 'GET_LISTS';
export const SET_LISTS = 'SET_LISTS';
export const GET_ITEMS = 'GET_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';
export const RESET_ITEMS = 'RESET_ITEMS';
export const INPUT_ADD_LIST = 'INPUT_ADD_LIST';
export const INPUT_MODIF_LISTNAME = 'INPUT_MODIF_LISTNAME';
export const POST_NEW_LIST = 'INPUT_NEW_LIST';
export const SET_NEW_LIST = 'SET_NEW_LIST';
export const INPUT_ADD_ITEM = 'INPUT_ADD_ITEM';
export const POST_NEW_ITEM = 'INPUT_NEW_ITEM';
export const SET_NEW_ITEM = 'SET_NEW_ITEM';
export const SET_OPEN_MODAL_LIST = 'SET_OPEN_MODAL_LIST';
export const PATCH_LIST_MODIF = 'PATCH_LIST_MODIF';
export const SET_LIST_MODIF = 'SET_LIST_MODIF';
export const CHECKBOX = 'CHECKBOX';
export const INPUT_MODIF_DEADLINE = 'INPUT_MODIF_DEADLINE';
export const SET_OPEN_POPUP_ITEM = 'SET_OPEN_POPUP_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_MSG = 'DELETE_ITEM_MSG';
export const SET_OPEN_POPUP_LIST = 'SET_OPEN_POPUP_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const DELETE_LIST_MSG = 'DELETE_LIST_MSG';
export const RESET_LISTS = 'RESET_LISTS';


export const setLists = (data) => ({
	type: SET_LISTS,
	data,
});

export const getLists = () => ({
	type: GET_LISTS,
});

export const getItems = (listId) => ({
	type: GET_ITEMS,
	listId,
});

export const setItems = (data) => ({
	type: SET_ITEMS,
	data,
});

export const resetItems = () => ({
	type: RESET_ITEMS,
});

export const inputAddList = (value) => ({
	type: INPUT_ADD_LIST,
	value,
});

export const inputModifListName = (value) => ({
	type: INPUT_MODIF_LISTNAME,
	value,
});

export const postNewList = () => ({
	type: POST_NEW_LIST,
});

export const setNewList = (msg) => ({
	type: SET_NEW_LIST,
	msg,
});

export const inputAddItem = (value, name) => ({
	type: INPUT_ADD_ITEM,
	value,
	name,
});

export const postNewItem = (listId) => ({
	type: POST_NEW_ITEM,
	listId,
});

export const setNewItem = (msg) => ({
	type: SET_NEW_ITEM,
	msg,
});

export const setOpenModalList = (id, name) => ({
	type: SET_OPEN_MODAL_LIST,
	id,
	name,
});

export const patchListModif = () => ({
	type: PATCH_LIST_MODIF,
});

export const setListModif = (msg) => ({
	type: SET_LIST_MODIF,
	msg,
});

export const checkbox = (itemId, checked, listId) => ({
	type: CHECKBOX,
	itemId,
	checked,
	listId,
});

export const setOpenPopupItem = (itemId) => ({
	type: SET_OPEN_POPUP_ITEM,
	itemId,
});

export const deleteItem = () => ({
	type: DELETE_ITEM,
});

export const deleteItemMsg = (msg) => ({
	type: DELETE_ITEM_MSG,
	msg,
});

export const setOpenPopupList = (listId) => ({
	type: SET_OPEN_POPUP_LIST,
	listId,
});

export const deleteList = () => ({
	type: DELETE_LIST,
});

export const resetLists = () => ({
	type: RESET_LISTS,
});

export const deleteListMsg = (msg) => ({
	type: DELETE_LIST_MSG,
	msg,
});
