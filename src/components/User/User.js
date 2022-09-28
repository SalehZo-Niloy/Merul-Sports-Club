import React from 'react';
import dp from '../../images/dp.jpg'
import './User.css'

const User = () => {
    return (
        <div className='user-container'>
            <div className='user-info'>
                <img src={dp} alt="" />
                <div>
                    <h4>Saleh Zohur</h4>
                    <p><small>Dhaka, Bangladesh</small></p>
                </div>
            </div>
            <div className='user-physic'>
                <p><strong>75</strong>kg <br />
                    Weight
                </p>
                <p><strong>6.5</strong><br />
                    Height
                </p>
                <p><strong>25</strong>yrs <br />
                    Age
                </p>
            </div>
        </div>
    );
};

export default User;