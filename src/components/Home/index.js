// == Import
import './styles.scss';
import PropTypes from 'prop-types';

// == Import composants
import ChildsSelect from '../ChildsSelect';
import EventsAlert from '../EventsAlert';
import Header from '../Header';
import Nav from '../Nav';
import Content from './content';

// == Import hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Import actions
import { getMembers } from '../../actions/family';
import { playLoader } from '../../actions/user';


// == Composant structure de la page Home
const Home = () => {

	const dispatch = useDispatch();
	const { familyId } = useSelector(state => state.user.family);

	// console.log('DANS HOME ===>',members);

	useEffect(() => {
		if(familyId) {
			dispatch(getMembers());
		}
	},[ familyId ]);
  
	return (
		<div className="home">
			<Header />
			<EventsAlert />
			<ChildsSelect />
			<Content />
			<Nav />
		</div>
	);
};

// == Export
export default Home;

Home.propTypes = {
	childId: PropTypes.string,
};
