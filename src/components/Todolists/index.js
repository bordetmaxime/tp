// == Import
import './styles.scss';

// == Import icones
import { IoMdAddCircle } from 'react-icons/io';

// == Import composants
import Header from '../Header';
import AllTodolists from './alltodolist';
import Nav from '../Nav';

// == Import hooks
import { useDispatch, useSelector } from 'react-redux';

// == Import des actions
import { inputAddList, postNewList } from '../../actions/todolist';


// == Composant
const Todolists= () => {

	const dispatch = useDispatch();

	const inputValue = useSelector(state => state.todolist.inputAddList);

	// appel l'action d'enregistrement dans le state de la valeur de l'input de création de liste
	const handleOnChange = (event) => {
		dispatch(inputAddList(event.target.value));
	};

	// appel l'action d'enregistrement de la nouvelle liste
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(postNewList());
	};


	return (
		<div className="todolist">
			<Header />
			<div className="form_div">
				<form onSubmit={ handleSubmit }>
					<div id="add_card_todo">
						<input type="text" id="add_card" name="add_list" value={ inputValue } placeholder="Nouvelle liste" onChange={ handleOnChange }/>
						<button type='submit'><IoMdAddCircle className="icon"/></button>
					</div>
				</form>
			</div>
			<AllTodolists />
			<Nav/>
		</div>

	);
};

// == Export
export default Todolists;

