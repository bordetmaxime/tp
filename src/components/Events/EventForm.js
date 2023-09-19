import './styles.scss';
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setOpenModalList } from '../../actions/todolist';
import Nav from '../Nav';
import Header from '../Header'
import ChildsSelect from '../ChildsSelect';
const EventForm = ({setAllEvents, setDateEvent, setTitleEvent, titleEvent, dateEvent}) => {



  const navigate = useNavigate();
  let allEventsArray = []

  const changeDate = (e) => {
    setDateEvent(e.target.value);
  }

  const changeTitle = (e) => {
    setTitleEvent(e.target.value);
  }

  const handleSubmit = (e) => {
    allEventsArray.push({date : dateEvent, title: titleEvent})
    setTitleEvent('')
    setDateEvent('')
    e.preventDefault();
    setAllEvents(allEventsArray)
    navigate('/events');
    
  }

  return (
    <div className="event">
      <Header />
			<ChildsSelect />
      <form className='event__form' onSubmit={handleSubmit}>
        <input id='event-date' type='date' name='event-date' required onChange={changeDate} />
        <label for="inputTitle">Nom de l'event :</label>
        <input id='title' name="inputTitle" type='text' name='event-date' required onChange={changeTitle} />  
        <button type='submit'>Valider</button>
        <FaTrash />
      </form>
      <Nav/>
    </div>
  );
};

export default EventForm;
