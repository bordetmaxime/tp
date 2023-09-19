// == Import
import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant page 404
const NotFound = () => {


	return (
		<div className="not-found">
			<h1>404</h1>
			<h2>Tout comme la tétine, la page recherchée est introuvable!</h2>
			<Link to={ '/' }>
				<button type='button'>Tétine retrouvée!</button>
			</Link>
		</div>
	);


};

// == Export
export default NotFound;

