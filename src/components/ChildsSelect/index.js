// == Import
import './styles.scss';

// == Import hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Import actions
import { childSelected, setChildsMembers } from '../../actions/family';
import { getMember } from '../../actions/member';

// == Composant de selection de l'enfant
const ChildsSelect = () => {

	const members = useSelector(state => state.family.members);
	const childs = useSelector(state => state.family.childMembers);
	const childId = useSelector(state => state.family.childSelectedValue);
	// const childName = useSelector(state => state.family.childSelectedName);

	const dispatch = useDispatch();
	// console.log(members);
  
	const inputValue = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		dispatch(childSelected(value, name));
	};  

	// console.log('CHILDID',childId);

	useEffect(() => {
		if( members) {
			const childMembers = members.filter(member => member.label === 'enfant');
			dispatch(setChildsMembers(childMembers));
      
		} else if(childId) {
			dispatch(getMember(childId));
		}
	}, [ members, childId ]);

	return (
		<div className="child">
			<select name="childs" value={ childId } id="child-select" onChange={ inputValue }>
				<option value=""> Choisis un enfant</option>
				{childs ? childs.map(child => (
					<option key={ child.member_id } name={ child.member_firstname } value={ child.member_id } >{child.member_firstname}</option>
				)) : ''}
			</select>
		</div>
	);
};

// == Export
export default ChildsSelect;
