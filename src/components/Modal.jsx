import React from 'react';

const Modal = ({ setShowModal, setIsActive, answersModel, setResult }) => {

    function returnToTestOrResult() {
        setShowModal(false)
        setIsActive(true)
    }

    const toResult = () => {
        setResult(true)
        setShowModal(false)
    }

    return (
        <div className="row">
            <div className="booksList col-12 modal" >
                <h1>Вы ответили не на все вопросы. Пропущенный вопрос равен 0 (нулю) баллов</h1>
                <button className="btn btn-secondary" onClick={returnToTestOrResult}>Назад к тесту</button>
                <button className="btn btn-secondary" onClick={toResult}>Посмотреть результат</button>
            </div>
        </div>
    )
}

export default Modal;