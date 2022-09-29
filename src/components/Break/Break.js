import React from 'react';
import './Break.css'

const Break = (props) => {
    const { setBreakTime } = props;

    const clickBreakBtn = time => {
        setBreakTime(time);
    }
    return (
        <div>
            <h3>Add A Break</h3>
            <div className='break-times'>
                <button onClick={() => clickBreakBtn(2)}>2min</button>
                <button onClick={() => clickBreakBtn(5)}>5min</button>
                <button onClick={() => clickBreakBtn(10)}>10min</button>
                <button onClick={() => clickBreakBtn(15)}>15min</button>
            </div>
        </div>
    );
};

export default Break;