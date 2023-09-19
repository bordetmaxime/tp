// == Imports
import './styles.scss';
import PropTypes from 'prop-types';


// == Imports composants
import Header from '../Header';
import Nav from '../Nav';
import Content from './content';
import AddMember from './AddMember';
import Member from './Member';
import FormMember from './FormMember';
import { useLocation, useParams } from 'react-router-dom';

// == Composant structure de la page Membres
const Members = () => {

  const memberId = useParams();
  const id = Object.keys(memberId).length;
  // console.log('USEPARAMS===>', Object.keys(memberId).length);
  // console.log('USEPARAMS===>', memberId.id);
  const path = useLocation();
  const location = path.pathname;
  // console.log(location);
  // console.log(`/member/${memberId.id}/modify`);

	return (
		<div className="members">
			<Header />
			{ location === '/formMember' ? <FormMember /> : location === '/members' ? <Content /> : id > 0 ? <Member id={ memberId.id } /> : location === '/member/modify' ? <FormMember /> : '' }
			{(id != 0 || (location === '/formMember')) || (location === '/member/modify') ? '' : <AddMember /> }
			<Nav />
		</div>
	);
};

// == Export
export default Members;

Members.propTypes = {
	member: PropTypes.string,
	// firstname: PropTypes.string.isRequired,
	// logout: PropTypes.func.isRequired,
};
