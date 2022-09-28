import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <h3>Add A Break</h3>
            <div className='break-times'>
                <button>2min</button>
                <button>5min</button>
                <button>10min</button>
                <button>15min</button>
            </div>
        </div>
    );
};

export default Break;