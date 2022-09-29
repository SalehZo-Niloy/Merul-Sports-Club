import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'

const Toast = (props) => {
    const notify = () => {
        if (props.totalTime) {
            toast.success('Congratulations, you have completed all activities', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            toast.warning('You have not selected any activity', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <div className='toast'>
            <button className='toast-btn' onClick={notify}>Activity Done</button>
            <ToastContainer />
        </div>
    );
};

export default Toast;