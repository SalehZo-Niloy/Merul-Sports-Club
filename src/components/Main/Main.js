import React, { useEffect, useState } from 'react';
import './Main.css'
import logo from '../../images/logo.png'
import Cards from '../Cards/Cards';

const Main = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className='main-sec-container'>
            <div className="card-container">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="" />
                    <h2>Merul Sports Club</h2>
                </div>
                <h3>Select Today's Activity</h3>
                <div className='cards'>
                    {
                        cards.map(card => <Cards card={card} key={card.id}></Cards>)
                    }
                </div>
            </div>
            <div className="calculation-container">
                <h2>Calculations</h2>
            </div>
        </div>
    );
};

export default Main;