import React from 'react';
import Card from './Card';
import june1 from '../assets/june1.png';

const Cards = () => {

const j1 = `This isn't your typical requiem; it's Verdi unbuttoned and unbound. With St.Clair's commentary slicing through the history and straight to the heart, expect a visceral journey through the "Dies irae," where terror and beauty collide, and the "Sanctus," a celestial burst of clarity. The "Libera me" is not just sung; it's unleashed—a raw, pleading force of nature that will seize your soul.

Buckle up for an audacious concert where the sacred meets the gut-wrenching drama of the opera house. Forget what you thought you knew—this is Verdi, reinvented`;


    return (
       <>
       <h2>Summer Events</h2>
       <div className="June">
        <h3>June</h3>
        
        <Card 
        src={june1} 
        title="Rediscover Verdi's Requiem"
        description={j1}
        location="test"/>

       </div>
       <div className="July">
        <h3>June</h3>
       </div>
       <div className="August">
        <h3>June</h3>
       </div>

       <h2>Autumn Events</h2>
       <div className="September">
        <h3>June</h3>

       </div>
       <div className="October">
        <h3>June</h3>

       </div>
       <div className="November">
        <h3>June</h3>

       </div>
       

       </> 
    )

}

export default Cards;