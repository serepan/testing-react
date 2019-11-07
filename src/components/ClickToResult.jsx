import React from 'react';

const ClickToResult = ({ answersModel, setShowModal, setResult, setIsActive }) => {

    const setToLocalStorage = () => {
        let arr = [...answersModel]
        localStorage.setItem('answers', JSON.stringify(arr));
        setIsActive(false)

        let result = arr.filter(el => typeof el === 'number')
        if (result.length < arr.length) {
            setShowModal(true)
        } else setResult(true)
    }

    return (
        <div className="booksList col-12">
            <button onClick={setToLocalStorage} className="btn btn-primary">Посмотреть результат</button>
        </div>
    )
}

export default ClickToResult;


