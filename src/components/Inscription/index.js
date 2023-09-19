// == Import
import './styles.scss';

// == Import composants
import Header from './Header';
import Message from '../Welcome/Message';

// == Import hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// == Import actions
import { delRedirection, inputInscr, submitInscr } from '../../actions/inscription';

// == Composant structure de la page Inscription
const Inscription = () => {

	const familyName = useSelector(state => state.inscription.familyName);
	const lastname = useSelector(state => state.inscription.lastname);
	const firstname = useSelector(state => state.inscription.firstname);
	const roleId = useSelector(state => state.inscription.roleId);
	const dateBirth = useSelector(state => state.inscription.dateBirth);
	const email = useSelector(state => state.inscription.email);
	const confirmEmail = useSelector(state => state.inscription.confirmEmail);
	const password = useSelector(state => state.inscription.password);
	const confirmPassword = useSelector(state => state.inscription.confirmPassword);
	const inscriptionMsgErr = useSelector(state => state.inscription.inscriptionMsgErr);
	const redirection = useSelector(state => state.inscription.redirection);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Fonction d'enregistrement des valeurs des inputs
	const inputValue = (event) => {

		const name = event.target.name;
		const value = event.target.value;

		dispatch(inputInscr(name, value));

	};  

	const inscriptionSubmit = (event) => {
		event.preventDefault();
		dispatch(submitInscr());
	};

	useEffect(() => {
		if(redirection){
			dispatch(delRedirection());
			navigate('/login');
		}
	}, [ redirection ]);


	return (

		<div className="inscription">

			<Header />

			<h2 className="title_principal">Inscription</h2> 

			{ inscriptionMsgErr ? <Message /> : '' }

			<form className="form_inscription" onSubmit={ inscriptionSubmit } >

				<div className="family_name_content inscription_box">
					<label htmlFor="family_name">* Nom de la famille </label>
					<input type="text" value={ familyName } id="family_name" name="familyName" required onChange={ inputValue }/>
				</div>

				<div className="inscription_box">
					<label htmlFor="name">* Nom </label>
					<input type="text" value={ lastname } id="name" name="lastname" placeholder="Nom" required onChange={ inputValue }></input>
				</div>

				<div className="inscription_box">
					<label htmlFor="surname">* Prénom</label>
					<input type="text" value={ firstname } id="surname" name="firstname" placeholder="Prénom" required onChange={ inputValue }/>
				</div>

				<div className="display_box">

					<div className="inscription_box role_and_date">
						<label htmlFor="role-select">* Rôle </label>
						<select name="roleId" value={ roleId } id="role-select" required onChange={ inputValue }>
							<option value=""></option>
							<option value="1">Père</option>
							<option value="2">Mère</option>
						</select>
					</div>

					<div className="inscription_box role_and_date">
						<label htmlFor="date">* Date de naissance</label>
						<input type="text" value={ dateBirth } id="date" name="dateBirth" placeholder="25/12/1900" required onChange={ inputValue }/>
					</div>

				</div>

				<div className="inscription_box">
					<h3 className="center_title">* email</h3>
					<span className="span_line"></span>
					<input type="email" value={ email } id="email" name="email" placeholder="email" className="input-margin" required onChange={ inputValue }/>
					<input type="email" value={ confirmEmail } id="validation_email" name="confirmEmail" placeholder="Confirmation email" required onChange={ inputValue }/>
				</div>

				<div className="inscription_box" >
					<h3 className="center_title">* Password </h3>
					<span className="span_line"></span>
					<input type="password" value={ password } id="password" name="password" placeholder="Password" className="input-margin" required onChange={ inputValue }/>
					<input type="password" value={ confirmPassword } id="validation_password" name="confirmPassword" placeholder="Confirmation password" required onChange={ inputValue }/>
				</div>

				<p className="center_title text">* Champs obligatoire</p>

				<div className="center_button">  
					<button	type="submit"	id="center_title"> Valider</button>
				</div>

			</form>
		</div>
	);
};

// == Export
export default Inscription;

  