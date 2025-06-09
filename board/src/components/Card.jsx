import React from 'react';

const Card = ({ src, title, description, location }) => {
    return (
        <>
        <img src={src} alt="event image" />
        <h4>{title}</h4>
        <p>{location}</p>
        <p>{description}</p>
        </>
    )
}

export default Card;

