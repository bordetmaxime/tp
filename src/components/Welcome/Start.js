// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant du visuel de bouton de depart de la page welcome
const Start = () => {
	return (
		<div className="start">
			<Link to='/login'>
				<button type='button' className="connection_button">Je me connecte</button>
			</Link>
          
			<Link to='/inscription'>
				<button type='button' className="inscription_button">Je m'inscris</button>
			</Link>
  
   
		</div>
	);
};

// == Export
export default Start;
