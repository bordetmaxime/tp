// == Import
import './styles.scss';

// == Import photo équipe
import antho from '../../assets/img-apropos/Anthony.gif';
import mathieu from '../../assets/img-apropos/Mathieu.gif';
import nico from '../../assets/img-apropos/Nico.gif';
import maxime from '../../assets/img-apropos/Maxime.gif';

// == Composant du visuel de bouton de depart de la page welcome
const Apropos = () => {
	return (
		<div className="apropos">

			<div className='apropos__cat'>

				<h1>BACK END</h1>

				<div className='apropos__dev'>
					<img alt="anthony" src={ antho }></img>
					<h2>Anthony DANIEL</h2>
					<h3>Product Owner / Scrum Master / Referent technique</h3>
				</div>

				<div className='apropos__dev'>
					<img alt="mathieu" src={ mathieu }></img>
					<h2>Mathieu SUHARD</h2>
					<h3>Lead Dev Back / Referent technique</h3>
				</div>

			</div>

			<div className='apropos__cat'>

				<h1>FRONT END</h1>

				<div className='apropos__dev'>
					<img alt="maxime" src={ maxime }></img>
					<h2>Maxime BORDET</h2>
					<h3>Lead Dev Front / Referent technique</h3>
				</div>

				<div className='apropos__dev'>
					<img alt="nicolas" src={ nico }></img>
					<h2>Nicolas NEGRIER</h2>
					<h3>Référent technique git / Referent technique</h3>
				</div>

			</div>

		</div>
	);
};

// == Export
export default Apropos;
