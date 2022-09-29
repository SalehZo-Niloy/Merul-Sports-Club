import React from 'react';
import './Cards.css'

const Cards = (props) => {
    const { handleAddToList, card } = props;
    const { picture, title, details, time, } = card;

    return (
        <div className='card'>
            <img src={picture} alt="" />
            <h4>{title}</h4>
            <p>{details}</p>
            <h5>Time required: {time}min</h5>
            <button onClick={() => handleAddToList(card)}>Add to list</button>
        </div>
    );
};

export default Cards;