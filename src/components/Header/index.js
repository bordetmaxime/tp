// == Import
import familyDeckLogo from '../../assets/favicon.ico';
import './styles.scss';

// == Import hooks
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// == Import actions
import { setLoggedOut } from '../../actions/user';

// == Import Icon
import { BiLogOutCircle } from '@react-icons/all-files/bi/BiLogOutCircle';

// == Composant Header de l'app
const Header = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { firstname } = useSelector(state => state.user.member);

	// fonction de déconnexion: modifie les infos du state et redirige vers la page de login
	const logout = () => {
		dispatch(setLoggedOut(false));
		navigate('/login');
	};


	return (
		<div className="header">
			<img src={ familyDeckLogo } alt="logo family deck" />
			<div className='header__hello'>
				<h1>Bonjour <span>{firstname}</span></h1>
			</div>
			<div className='logout-button' onClick={ logout } role="button" tabIndex={ 0 } >
				<BiLogOutCircle />
        <p>Déconnexion</p>
			</div>

		</div>
	);
};

// == Export
export default Header;

