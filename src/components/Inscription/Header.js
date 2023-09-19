// == Import
import familyDeckLogo from '../../assets/logo.png';
import './styles.scss';

// == Composant Header de la page Inscription
const Header = () => {
	return (
		<div className="header_inscription">
			<img src={ familyDeckLogo } alt="logo family deck" />
		</div>
	);
};

// == Export
export default Header;
