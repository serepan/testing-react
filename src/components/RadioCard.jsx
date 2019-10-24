import React, { useState, useEffect } from 'react';
import "../App.scss"

const RadioCard = ({ data, numberOfQuestion, setAnswer }) => {
    const result = (indexOfAnswerrArr) => {
        const answer = data.answers[indexOfAnswerrArr];
        setAnswer(answer.points)
    }
    return (
        <div className="booksList col-lg-6">
            <h1> Вопрос №: {numberOfQuestion + 1}</h1>
            <h2>{data.title}</h2>
            <div className="card-body" >
                {data.answers.map((item, index) => {
                    return (
                        <>
                            <label htmlFor={`${data.title}-${index}`}>{item.answer}</label>
                            <input type="radio" name="radio" value={index} onChange={(e) => result(e.target.value)} id={`${data.title}-${index}`} />
                        </>
                    )
                })
                }
            </div>
        </div>
    )
}

export default RadioCard;