import axiosConfig from './axiosConfig';
import { setErrInscr, setInscription, SUBMIT_INSCR } from '../actions/inscription';


const inscriptionMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case SUBMIT_INSCR: {
			const { familyName, lastname, firstname, roleId, dateBirth, email,confirmEmail, password, confirmPassword } = store.getState().inscription;

			try {
				const { data } = await axiosConfig.post('/api/user/register', {
					familyName,
					lastname,
					firstname,
					roleId,
					dateBirth,
					email,
					confirmEmail,
					password,
					confirmPassword,
          firstname, 
					roleId,
					dateBirth,
					password,
					confirmPassword,
      
				});
				store.dispatch(setInscription(data.msg));
				console.log(data.msg);
      
				break;
			} catch (error) {
				console.error(error);
        console.log(error.response.data.msg);
				store.dispatch(setErrInscr(error.response.data.msg));
				break;
			}
		}
		default: 
			next(action); 
	} 
}; 

export default inscriptionMiddleware;

