// == Import
import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant page 403
const NotAutorized = () => {


	return (
		<div className="not-authorized">
			<h1>403</h1>
			<h2>J'ai pas l'impression que tu es le droit de faire ca...</h2>
			<Link to={ '/' }>
				<button type='button'>Va dans ta chambre!</button>
			</Link>
		</div>
	);


};

// == Export
export default NotAutorized;
