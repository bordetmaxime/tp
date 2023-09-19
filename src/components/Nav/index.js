// == Import
import { NavLink } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import './styles.scss';

// == Import Icones
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { RiCalendarEventFill } from '@react-icons/all-files/ri/RiCalendarEventFill';
import { GoChecklist } from '@react-icons/all-files/go/GoChecklist';

import { getLists } from '../../actions/todolist';

// == Composant barre de navigation
const Nav = () => {

  const dispatch = useDispatch();

  const handleTodolists = () => {
		dispatch(getLists());
	};
  
	return (
		<div className="nav" style={{}}>

			<NavLink to="/events" >
				<RiCalendarEventFill className='nav__icon' />
			</NavLink>

			<NavLink to="/home" >
				<FaHome className='nav__icon'/>
			</NavLink>

			<NavLink to="/todolists" onClick={ handleTodolists }>
				<GoChecklist className='nav__icon'/>
			</NavLink>
		
		</div>
	);
};

// == Export
export default Nav;
