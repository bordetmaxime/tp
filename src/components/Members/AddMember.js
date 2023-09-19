// == Imports
import './styles.scss';

// == Imports icones
import { MdAddCircle } from '@react-icons/all-files/md/MdAddCircle';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { delStateMember } from '../../actions/member';

// == Composant d'ajout d'un membre
const AddMember = () => {

	const dispatch = useDispatch();

	const restStateMember = () => {
		dispatch(delStateMember());
	};

	return (
		<div className="addMember">
			<Link to='/formMember' onClick={ restStateMember }>
				<MdAddCircle className='addMember__button' />
			</Link>
		</div>
	);
};

// == Export
export default AddMember;
