import React, { useState, useEffect } from 'react';
import "../App.scss"

const TextCard = ({ data, numberOfQuestion, setAnswerText }) => {
    const result = (e) => {                                         // попытки работать с текстовым полем
        let answer = e.target.value;
        if (answer.includes('а')) { setAnswerText(1) }
        console.log(setAnswerText(1))
        //   else setAnswerText(0)
    }

    return (
        <div className="booksList col-lg-6">
            <h1> Вопрос №: {numberOfQuestion + 1}</h1>
            <h2>{data.title}</h2>
            <div className="card-body">
                <input type="text" onChange={result} placeholder="Введите Ваш вариант ответа..." />
                <button className="btn btn-primary" onClick={result} >Подтвердить</button>
            </div>
        </div>

    )
}

export default TextCard;