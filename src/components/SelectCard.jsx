import React, { useState, useEffect } from 'react';
import { questionsList } from '../data/questionsList'
import "../App.scss"

const SelectCard = ({ data, numberOfQuestion, setAnswer }) => {
    const result = (indexOfAnswerrArr) => {
        const answer = data.answers[indexOfAnswerrArr];
        setAnswer(answer.point)
    }
    return (

        <div className="booksList col-lg-6">
            <h1> Вопрос №: {numberOfQuestion}</h1>
            <h2>{data.title}</h2>
            <div className="card-body" >
                <select onChange={(e) => result(e.target.value)}>
                    {data.answers.map((item, index) => {
                        return (
                            <option value={index} key={data.title + Math.random(new Date().getMilliseconds())}>{item.answer}</option>
                        )
                    })
                    }
                </select>
            </div>
        </div>
    )
}

export default SelectCard;