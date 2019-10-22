import React, { useState, useEffect } from 'react';
import { questionsList } from '../data/questionsList'
import "../App.scss"

const RadioCard = ({ data, numberOfQuestion }) => {
    return (
        <div className="booksList col-lg-6">
            <h1> Вопрос №: {numberOfQuestion}</h1>
            <h2>{data.title}</h2>
            <div className="card-body" >
                {data.answers.map((item) => {
                    return (
                        <label key={data.title + Math.random(new Date().getMilliseconds())}><input type="radio" />{item.answer}</label>
                    )
                })
                }
            </div>
        </div>
    )
}

export default RadioCard;