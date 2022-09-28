import React from 'react';

const Cards = (props) => {
    const { picture, title, details, time, } = props.card;
    return (
        <div>
            <img src={picture} alt="" />
            <h4>{title}</h4>
            <p>{details}</p>
            <h5>Time required: {time}min</h5>
            <button>Add to list</button>
        </div>
    );
};

export default Cards;