import axiosConfig from './axiosConfig';
import { getMembers, resetChildValue } from '../actions/family';
import { deleteMsg, DELETE_MEMBER, GET_MEMBER, PATCH_MEMBER, savMember, setErrAddMember, setMember, SUBMIT_ADD_MEMBER } from '../actions/member';

const memberMiddleware = (store) => (next) => async (action) => { 

 

	switch (action.type) { 

		case SUBMIT_ADD_MEMBER: {
			const { firstname, roleId, datebirth, username, password, confirmPassword, size, topsize, bottomsize, shoesize, school, hobbies} = store.getState().member;
			const { familyId } = store.getState().user.family;
			const { token } = store.getState().user;

      const email = username
      const numberFamily = familyId

			try {
				const { data } = await axiosConfig.post('/api/user/register', {
         
					numberFamily,
          username,
          firstname,
          email,
					roleId,
					datebirth,
					password,
					confirmPassword,
					topsize,
					bottomsize,
					shoesize,
					size,
					school,
					hobbies,
				},{
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setMember(data.msg));
				store.dispatch(getMembers());
				// console.log("MEMBER MIDDLEWARE====>", data);
      
				break;
			} catch (error) {
				console.error(error);
				store.dispatch(setErrAddMember(error.response.data.msg));
				break;
			}
		}

		case GET_MEMBER: {
			const memberId = action.payload;
			const { token } = store.getState().user;
			const { familyId } = store.getState().family;
			// console.log('MEMBERID dans middleware',memberId);
			// console.log('FAMILYID====>', familyId);

			try {
				const { data } = await axiosConfig.get(`/api/family/${ familyId }/member/${ memberId }`,{
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				// console.log("MEMBER MIDDLEWARE====>", data);
				store.dispatch(savMember(data));
      
				break;
			} catch (error) {
				console.error(error);
				// setErrInscr(error.response.data.msg);
				break;
			}
		}

		case PATCH_MEMBER: {
			const { firstname, email, datebirth, size, topsize, bottomsize, shoesize, school, hobbies, memberId} = store.getState().member;
			const { familyId } = store.getState().user.family;
			const { token } = store.getState().user;
      
      console.log(email)

			try {
        
				const { data } = await axiosConfig.patch(`/api/member/${ memberId }`, {
          username,
					firstname,
					email,
					datebirth,
					topsize,
					bottomsize,
					shoesize,
					size,
					school,
					hobbies,
				},{
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setMember(data.msg));
				store.dispatch(getMembers());
				// console.log("MEMBER MIDDLEWARE====>", data);
      
				break;
			} catch (error) {
				console.error(error);
				// setErrInscr(error.response.data.msg);
				break;
			}
		}

		case DELETE_MEMBER:{

			const memberId = store.getState().member.memberId;
			const { token } = store.getState().user;
			const { familyId } = store.getState().family;
			// console.log('MEMBERID dans middleware',memberId);
			// console.log('FAMILYID====>', familyId);

			try {
				const { data } = await axiosConfig.delete(`/api/family/${ familyId }/member/${ memberId }`,{
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				// console.log("MEMBER DELETE MIDDLEWARE====>", data);
				store.dispatch(deleteMsg(data.msg));
				store.dispatch(getMembers());
				store.dispatch(resetChildValue());      
				break;
			} catch (error) {
				console.error(error);
				// setErrInscr(error.response.data.msg);
				break;
			}
		}

		default: 
			next(action); 
	} 
}; 

export default memberMiddleware;
