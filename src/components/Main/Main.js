import React, { useEffect, useState } from 'react';
import './Main.css'
import logo from '../../images/logo.png'
import Cards from '../Cards/Cards';
import User from '../User/User';
import Break from '../Break/Break';
import Activity from '../Activity/Activity';
import { addToDb, getFromDb } from '../../utilities/fakeDb';
import Toast from '../Toast/Toast';

const Main = () => {
    const [cards, setCards] = useState([]);
    const [breakTime, setBreakTime] = useState(getFromDb);
    const [totalTime, setTotalTime] = useState(0);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    useEffect(() => {
        if (!breakTime) {
            setBreakTime(0)
            addToDb(0);
        }
        else {
            addToDb(breakTime);
        }
    }, [breakTime])

    const handleAddToList = (card) => {
        setTotalTime(totalTime + card.time);
    }

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
                        cards.map(card => <Cards card={card} key={card.id} handleAddToList={handleAddToList}></Cards>)
                    }
                </div>
            </div>
            <div className="calculation-container">
                <User></User>
                <Break setBreakTime={setBreakTime}></Break>
                <Activity breakTime={breakTime} totalTime={totalTime}></Activity>
                <Toast totalTime={totalTime}></Toast>
            </div>
        </div>
    );
};

export default Main;