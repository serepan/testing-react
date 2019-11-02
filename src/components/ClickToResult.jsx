import React from 'react';
import { Link } from 'react-router-dom';

const ClickToResult = ({ answersModel }) => {

    const setToLocalStorage = () => {
        let arr = [...answersModel]
        localStorage.setItem('answers', JSON.stringify(arr))
    }

    return (
        <div className="booksList col-12">
            <Link onClick={setToLocalStorage} className="btn btn-primary" to='/Result'>Посмотреть результат</Link>
        </div>
    )
}

export default ClickToResult;
