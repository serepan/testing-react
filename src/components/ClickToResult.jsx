import React from 'react';
import { Link } from 'react-router-dom';

const clickToResult = (answersModel) => {

    const setToLocalStorage = () => {
        localStorage.setItem('answers', JSON.stringify(answersModel))
    }
    return (
        <div className="booksList col-lg-6">
            <Link onClick={setToLocalStorage} className="btn btn-primary" to='/Result'>Посмотреть результат</Link>
        </div>
    )
}

export default clickToResult;
