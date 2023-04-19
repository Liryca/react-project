import React from 'react';
import flying from './flying.svg';
import './Error.css';
import { useAppDispatch } from '../../hooks/useSelectorTyped';
import { getUsersThunk} from "../../store/users/actions";

const Error: React.FC = () => {
    
    const dispatch = useAppDispatch();

    function getUsersAfter() {
        dispatch(getUsersThunk())
}

    return (
        <div className='error'>
            <img className='' src={flying} alt='error'></img>
            <h1>Какой-то сверхразум все сломал</h1>
            <p className='error-text' >Постараемся быстро починить</p>
            <p className='error-link' onClick={getUsersAfter}>Попробовать снова</p>
        </div>
    );
};

export default Error;