import React from 'react';
import './SearchError.css';
import error from './error.svg';

const SearchError:React.FC = () => {
    return (
        <div className='search-error'>
            <img src={error} className='img-search-error' alt='error' />
            <h1 className='search-error-title'>Мы никого не нашли</h1>
            <p>Попробуй скорректировать запрос</p>
        </div>
    );
};

export default SearchError;