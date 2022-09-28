import React from 'react';
import './Activity.css'

const Activity = () => {
    return (
        <div>
            <h3>Activity Details</h3>
            <div className='activity-time'><h4>Activity Time: </h4> <p>{ }min</p></div>
            <div className='break-time'><h4>Break Time: </h4> <p>{ }min</p></div>
        </div>
    );
};

export default Activity;