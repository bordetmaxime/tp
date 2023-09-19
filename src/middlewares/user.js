import { LOGIN_USER, playLoader, setErrLogin, setlogin } from '../actions/user';
import axiosConfig from './axiosConfig';


const userMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case LOGIN_USER: {
			const { userName, password } = store.getState().user;

			try {
				const { data } = await axiosConfig.post('/api/user/auth', {
					userName,
					password,
				});
				store.dispatch(setlogin(data));
        store.dispatch(playLoader());
        // console.log("DATA USER===> ",data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}
		default: 
			next(action); 
	} 
}; 

export default userMiddleware;
