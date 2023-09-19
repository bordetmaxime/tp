import axiosConfig from './axiosConfig';
import { CHECKBOX, deleteItemMsg, DELETE_ITEM, DELETE_LIST, getItems, getLists, GET_ITEMS, GET_LISTS,
   PATCH_LIST_MODIF, POST_NEW_ITEM, POST_NEW_LIST, resetItems, resetLists, setItems, setListModif, setLists, 
   setNewItem, setNewList } from '../actions/todolist';


const todolistMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case GET_LISTS: {
			const { token } = store.getState().user;
			const { familyId } = store.getState().user.family;

			try {
				const { data } = await axiosConfig.get(`/api/todolist/family/${ familyId }`, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setLists(data));
				// console.log('data TODOLIST middleware ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

		case GET_ITEMS: {
			const { token } = store.getState().user;
			const listId = action.listId;

			try {
				const { data } = await axiosConfig.get(`/api/todolist/${ listId }/items`, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setItems(data.todolistAndItems));
				// console.log('data ITEMS middleware ===>',data.todolistAndItems);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.message);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

		case POST_NEW_LIST: {
			const { token } = store.getState().user;
			const title = store.getState().todolist.inputAddList;
			const memberId = store.getState().user.member.memberid;
			const { familyId } = store.getState().user.family;

			try {
				const { data } = await axiosConfig.post('/api/todolist/',{
					familyId,
					memberId,
					title,
					color: '', 
				}, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setNewList(data.msg));
				store.dispatch(getLists());
				// console.log('data CREATE NEW LIST ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

		case POST_NEW_ITEM: {
			const { token } = store.getState().user;
			const title = store.getState().todolist.inputNewItem;
			const deadline = store.getState().todolist.inputNewDeadline;
			const listId = action.listId;

			try {
				const { data } = await axiosConfig.post(`/api/todolist/${ listId }/items`,{
					title,
					color: '',
					deadline,
				}, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setNewItem(data.msg));
				store.dispatch(getItems(listId));
				// console.log('data CREATE NEW ITEM ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

		case PATCH_LIST_MODIF: {
			const { token } = store.getState().user;
			const title = store.getState().todolist.inputModifValue;
			const listId = store.getState().todolist.targetId;

			try {
				const { data } = await axiosConfig.patch(`/api/todolist/${ listId }`,{
					title,
					color: '',
					deadline: '',
				}, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setListModif(data.msg));
				store.dispatch(getLists());
				// console.log('data CREATE NEW ITEM ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

		case CHECKBOX: {
			const { token } = store.getState().user;
			const itemId = action.itemId;
			const checked = action.checked;
			const listId = action.listId;

			try {
				const { data } = await axiosConfig.patch(`/api/item/${ itemId }/status`,{
					status: checked,
				}, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				// store.dispatch(setListModif(data.msg));
				store.dispatch(getItems(listId));
				// console.log('data CREATE NEW ITEM ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

		case DELETE_ITEM: {
			const { token } = store.getState().user;
			const itemId = store.getState().todolist.itemId;
			const listId = store.getState().todolist.targetId;

			try {
				const { data } = await axiosConfig.delete(`/api/item/${ itemId }`, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(deleteItemMsg(data.msg));
				store.dispatch(getItems(listId));
        store.dispatch(resetItems());
				// console.log('data CREATE NEW ITEM ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

    case DELETE_LIST: {
			const { token } = store.getState().user;
			const listId = store.getState().todolist.targetId;

			try {
				const { data } = await axiosConfig.delete(`/api/todolist/${ listId }`, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(deleteItemMsg(data.msg));
				store.dispatch(getLists());
        store.dispatch(resetLists());
				// console.log('data CREATE NEW ITEM ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}

		default: 
			next(action); 
	} 
}; 

export default todolistMiddleware;
