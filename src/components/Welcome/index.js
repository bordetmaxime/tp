// == Import
import './styles.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// == Import composants
import Content from './content';
import Header from './Header';
import Start from './Start';
import Auth from './Auth';
import Message from './Message';
import { Link } from 'react-router-dom';


// == Composant structure de la page Welcome

const Welcome = ({ login }) => {

  const { errLogin } = useSelector(state => state.user);
  const { inscriptMsgSucces, inscriptionMsgErr } = useSelector(state => state.inscription);

	return (
    
		<div className="welcome">
			<Header />
			<Content />
			{ inscriptMsgSucces || inscriptionMsgErr || errLogin ? <Message /> : ''}

			{login ? <Auth /> : <Start /> }

      <Link to='/apropos'>
        <p className='apropos__link'>A propos</p>
      </Link>

		</div>
	);
};

// == Export
export default Welcome;

Welcome.propTypes = {
	login: PropTypes.string,
	userName: PropTypes.string,
	password: PropTypes.string,
	setUserName: PropTypes.func,
	setPassword: PropTypes.func,
	loginSubmit: PropTypes.func,
	inscriptSucces: PropTypes.string,
	errLogin: PropTypes.string,
};
