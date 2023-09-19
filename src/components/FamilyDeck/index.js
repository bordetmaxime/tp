// == Import
import { Route, Routes } from 'react-router';
import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import './styles.scss';

// == Import composant
import Events from '../Events';
import Home from '../Home';
import Welcome from '../Welcome';
import Inscription from '../Inscription';
import Todolists from '../Todolists';
import Todolist from '../Todolist';
import Members from '../Members';
import NotFound from '../NotFound';
import NotAutorized from '../NotFound/NotAutorized';
import Loader from '../Loader';
import Apropos from '../Welcome/Apropos';
import EventForm from '../Events/EventForm'



// == Composant principal de l'app
const FamilyDeck = () => {

const [dateEvent, setDateEvent] = useState('');
const [titleEvent, setTitleEvent] = useState('');
const [allEvents, setAllEvents] = useState([]);

	// State USER Inscription
	const loggedIn = useSelector((state) => state.user.loggedIn);
  const loader = useSelector(state => state.user.loader);

	return (
		<div className="familyDeck">
			{/* Routes autorisées si le user est connecté (loggedIn === true) */}

      { 
        loader ? 
        <Loader /> :
        loggedIn ? 
          <Routes>
           
          	<Route path="/home" element={ <Home /> } />
          	<Route path="/members" element={ <Members /> } />
          	<Route path="/member/:id" element={ <Members /> } />
          	<Route path="/member/modify" element={ <Members /> } />
          	<Route path="/formMember" element={ <Members /> } />
          	<Route path="/events" element={ <Events allEvents={allEvents} /> } />
            <Route path="/eventform" 
            element={ 
            <EventForm 
            setAllEvents={setAllEvents}
            setDateEvent={setDateEvent}
            setTitleEvent={setTitleEvent}
            titleEvent={titleEvent}
            dateEvent={dateEvent} /> } />
          	<Route path="/event/:id" element={ <Events event={ 'eventId' } /> } />
          	<Route path="/event/:id/modify" element={ <Events form={ 'form' } /> } />
          	<Route path="/todolists" element={ <Todolists /> } />
          	<Route path="/todolist/:id" element={ <Todolist /> } />
          	<Route path="*" element={ <NotFound loggedIn={loggedIn} /> } />
          </Routes> 
          :
          <Routes>
          	<Route path="/" element={ <Welcome /> } />
            <Route path="/apropos" element={ <Apropos /> } />
          	<Route path="/login" element={ <Welcome login={ 'login' } /> } />
          	<Route path="/inscription" element={ <Inscription /> } />
          	<Route path="/home" element={ <NotAutorized /> } />
          	<Route path="/members" element={ <NotAutorized /> } />
          	<Route path="/member" element={ <NotAutorized /> } />
          	<Route path="/member/:id" element={ <NotAutorized /> } />
          	<Route path="/events" element={ <NotAutorized /> } />
          	<Route path="/event/:id" element={ <NotAutorized /> } />
          	<Route path="/todolists" element={ <NotAutorized /> } />
          	<Route path="/todolist/5" element={ <NotAutorized /> } />        
          	<Route path="*" element={ <NotFound /> } />
          </Routes>

      }
			{/* {
				loggedIn && 
          <Routes>
          	<Route path="/home" element={ <Home /> } />
          	<Route path="/members" element={ <Members /> } />
          	<Route path="/member/:id" element={ <Members /> } />
          	<Route path="/member/modify" element={ <Members /> } />
          	<Route path="/formMember" element={ <Members /> } />
          	<Route path="/events" element={ <Events /> } />
          	<Route path="/event/:id" element={ <Events event={ 'eventId' } /> } />
          	<Route path="/event/:id/modify" element={ <Events form={ 'form' } /> } />
          	<Route path="/todolists" element={ <Todolists /> } />
          	<Route path="/todolist/:id" element={ <Todolist /> } />
          	<Route path="*" element={ <NotFound loggedIn={loggedIn} /> } />
          </Routes>
			} */}
			{/* Routes autorisées si le user n'est pas connecté (loggedIn === false) */}
			{/* {
				!loggedIn && 
          <Routes>
          	<Route path="/" element={ <Welcome /> } />
          	<Route path="/login" element={ <Welcome login={ 'login' } /> } />
          	<Route path="/inscription" element={ <Inscription /> } />
          	<Route path="/home" element={ <NotAutorized /> } />
          	<Route path="/members" element={ <NotAutorized /> } />
          	<Route path="/member" element={ <NotAutorized /> } />
          	<Route path="/member/:id" element={ <NotAutorized /> } />
          	<Route path="/events" element={ <NotAutorized /> } />
          	<Route path="/event/:id" element={ <NotAutorized /> } />
          	<Route path="/todolists" element={ <NotAutorized /> } />
          	<Route path="/todolist/5" element={ <NotAutorized /> } />        
          	<Route path="*" element={ <NotFound /> } />
          </Routes>

			} */}

		</div>
	);
};

// == Export
export default FamilyDeck;
