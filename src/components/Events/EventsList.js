import React from 'react';
import './styles.scss';

const EventsList = ({ allEvents }) => {
  return (
    <div className="eventsList">
      {allEvents.map((event, index) => (
        <div className='eventsList__item' key={index}>
          <p> Date : {event.date}</p>
          <p>{event.title}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsList;

