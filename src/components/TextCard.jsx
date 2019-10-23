import React, { useState, useEffect } from 'react';
import "../App.scss"

const TextCard = ({ data, numberOfQuestion, setAnswer }) => {
    const [inputValue, setInputValue] = useState('');                                      // попытки работать с текстовым полем


    const answerValidator = (value) => {
        (value.toLowerCase() === data.answers.toString().toLowerCase()) ? setAnswer(1) : setAnswer(0)
    }


    return (
        <div className="booksList col-lg-6">
            <h1> Вопрос №: {numberOfQuestion + 1}</h1>
            <h2>{data.title}</h2>
            <div className="card-body">
                <input type="text" placeholder="Введите Ваш вариант ответа..." onChange={(e) => { answerValidator(e.target.value) }} />
            </div>
        </div>

    )
}

export default TextCard;