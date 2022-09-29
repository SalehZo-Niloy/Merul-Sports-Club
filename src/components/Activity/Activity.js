import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { breakTime, totalTime } = props;
    return (
        <div>
            <h3>Activity Details</h3>
            <div className='activity-time'><h4>Activity Time: </h4> <p>{totalTime}min</p></div>
            <div className='break-time'><h4>Break Time: </h4> <p>{breakTime}min</p></div>
        </div>
    );
};

export default Activity;