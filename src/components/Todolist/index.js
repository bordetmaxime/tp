// == Import
import './styles.scss';
import Popup from 'reactjs-popup';

// == Import icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { IoMdAddCircle } from 'react-icons/io';

// == Import composants
import Header from '../Header';
import Nav from '../Nav';

//== Import hooks
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Import Actions
import { checkbox, deleteItem, getItems, inputAddItem, inputModifListName, patchListModif, postNewItem, setOpenModalList, setOpenPopupItem } from '../../actions/todolist';



// == Composant vue d'une todolist
const Todolist= () => {

	const dispatch = useDispatch();

	const listId = useParams();
	const items = useSelector(state => state.todolist.items);
	const lists = useSelector(state => state.todolist.lists);
	const inputNewItem = useSelector(state => state.todolist.inputNewItem);
	const inputNewDeadline = useSelector(state => state.todolist.inputNewDeadline);
	const inputModifValue = useSelector(state => state.todolist.inputModifValue);
	const openModalList = useSelector(state => state.todolist.openModalList);
	const targetId = useSelector(state => state.todolist.targetId);
	const open = useSelector(state => state.todolist.open);

	// appel l'action d'afficher l'input de modification du nom de la liste ainsi que les corbeilles pour la suppression des items
	const openModal = (event) => {
		dispatch(setOpenModalList(event.target.id, event.target.getAttribute('name')));
	};

	// appel l'action l'enregistre dans le state la valeur de l'input de modification de nom de list
	const handleInputModifListName = (event) => {
		dispatch(inputModifListName(event.target.value));
	};

	// appel l'action de modifier l'etat de la checkbox dans la base API
	const handleCheck = (event) => {
		dispatch(checkbox(event.target.id, event.target.checked, listId.id));
	};

	// appel l'action d'enregistrement des modifications du nom de la liste en base API
	const SubmitModify = (event) => {
		event.preventDefault();
		dispatch(patchListModif());
	};

	// appel l'action d'enregistrement des valeurs des inputs pour la création d'item
	const handleInputItem = (event) => {
		dispatch(inputAddItem(event.target.value, event.target.name));
	};

	// appel l'action d'envoi des informations de création d'un nouvel item
	const submitNewItem = (event) => {
		event.preventDefault();
		dispatch(postNewItem(listId.id));
	};

	// appel l'action d'affichage de la popup de suppression avec l'envoi de l'id de l'item visé
	const openPopup = (event) => {
		dispatch(setOpenPopupItem(event.target.parentNode.parentElement.id));
	};

	// appel l'action de suppression de l'item en base api
	const handleDeleteItem = () => {
		dispatch(deleteItem());
	};


	// Récupération de la liste selectionné

	const list = lists.find(el => el.todolist_id == listId.id);

	// appel l'action de récupération de la liste des items appartenant à la liste
	useEffect(() => {
    console.log(items.length);
    if (items > 0) {
      dispatch(getItems(listId.id));
    }
		
	},[items]);

	return (

		<div className="todolist">
			<Header />
         
			<div className="card">
				<header className="header_todolist">
					{ 
						openModalList && (list.todolist_id === Number(targetId)) ? 
							<form className='form_modify_todolist' onSubmit={ SubmitModify }>
								<input type="text" name="nameList" value={ inputModifValue } placeholder={ list.todolist_title } onChange={ handleInputModifListName }/>
								<button className='member__submit' type='submit'>Valider</button>
							</form> :
							<>
								<h2 className="title">{ list.todolist_title }</h2>
								<FaPen id={ list.todolist_id } name={ list.todolist_title } className="header_icon left" onClick={ openModal }/>
								{/* <FaTrash className="header_icon"/> */}
							</>
					}
				</header>

				<form className="form_card" onSubmit={ submitNewItem }>
 
					<div id="add_card_div">
						<input className='inputItem' type="text" id="add_card" name="inputNewItem" value={ inputNewItem } placeholder="Nouvel élément" onChange={ handleInputItem }/>
						<input className='inputItem' type="text" id="add_card" name="inputNewDeadline" value={ inputNewDeadline } placeholder="Deadline" onChange={ handleInputItem }/>
						<button type='submit'><IoMdAddCircle className="icon"/></button>
					</div>
  
				</form>

				<main className="main_card">
					<ul>

						{items ? items.map(item => ( 
							<div key={ item.item_id } id={ item.item_id } className="item_card">
								<li className={ item.item_status ? 'checked' : '' } >
									{ 
										openModalList && (list.todolist_id === Number(targetId)) ? 
											<FaTrash className="icon-item" onClick={ openPopup } /> : 
											<input type='checkbox' id={ item.item_id } name={ item.item_title } checked={ item.item_status } onChange={ handleCheck }></input>
									}{item.item_title}</li> 
								{
									item.item_deadline ? <p>Avant le {item.item_deadline}</p> : ''
								}
								
								<Popup open={ open } >
									<div className='deletePopUp'>
										<h4 className='member__title4'>Confirmez la suppression</h4>
										<button className='member__submit' type='submit' onClick={ openPopup }>Annuler</button>
										<button className='member__submit' type='submit' onClick={ handleDeleteItem }>Valider</button>
									</div>
								</Popup>
								
							</div>
						)): ''}

					</ul>
				</main>

			</div>
			<Nav/>
      
		</div>
	);
};

// == Export
export default Todolist;

