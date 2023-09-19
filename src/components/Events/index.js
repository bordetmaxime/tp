// == Imports
import './styles.scss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';



// == Imports composents
import EventsList from './EventsList';
import ChildsSelect from '../ChildsSelect';
import Header from '../Header';
import Nav from '../Nav';
import AddEvent from './AddEvent';


// == Composant Evenements
const Events = ({allEvents}) => {

	return (
		<div className="events">
			<Header />
			<ChildsSelect />
      <EventsList allEvents={allEvents} />
		 <AddEvent /> 
			<Nav />
		</div>
	);
};

// == Export
export default Events;

Events.propTypes = {
	// logout: PropTypes.func.isRequired,
	// firstname: PropTypes.string.isRequired,
};
