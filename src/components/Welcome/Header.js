// == Import
import familyDeckLogo from '../../assets/logo.png';
import './styles.scss';

// == Composant Header de la page d'accueil
const Header = () => {
	return (
		<div className="header_welcome">
			<img src={ familyDeckLogo } alt="logo family deck" />
		</div>
	);
};

// == Export
export default Header;
