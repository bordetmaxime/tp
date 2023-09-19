// == Imports
import './styles.scss';
import { Link } from 'react-router-dom';

// == Imports icones
import { MdAddCircle } from '@react-icons/all-files/md/MdAddCircle';

// == Composant d'ajout d'evenement
const AddEvent = () => {


	return (
		<div className="addEvent">
     		<Link to='/eventform'>
         <MdAddCircle className='addEvent__button'/>
					</Link>
		

		</div>
	);
};

// == Export
export default AddEvent;
