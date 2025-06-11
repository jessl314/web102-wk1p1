import React from 'react';
import { events } from '../data/events';
import './Cards.css';

const groupByMonth = (eventsArray) => {
    const grouped = {};
    for (const event of eventsArray) {
        if(!grouped[event.month]) {
            grouped[event.month] = [];
        }
        grouped[event.month].push(event);
    }
    return grouped;
};

const Cards = () => {
    const eventsByMonth = groupByMonth(events);

    return (
       <div className="cards-container">
       <h2>Summer Events</h2>
       {Object.entries(eventsByMonth).map(([month, monthevents]) => (
        <section key={month} className="month-section">
            <h3>{month}</h3>
            <div className="cards-grid">
                {monthevents.map((event, index) => (
                    <div key={index} className="card">
                        <img src={event.img} alt={event.name} className="card-image"/>
                        <div className="card-content">
                            <h4>{event.name}</h4>
                            <p>{event.description}</p>
                            <p className="card-details">{event.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
       ))}
       </div> 
    )
}

export default Cards;