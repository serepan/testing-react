import React, { useState, useEffect } from 'react';
import { questionsList } from '../data/questionsList'
import "../App.css"

const SelectCard = ({ data, numberOfQuestion, setAnswer }) => {
    const result = (indexOfAnswerrArr) => {
        const answer = data.answer[indexOfAnswerrArr];
        setAnswer(answer.point)
    }
    return (

        <div className="booksList col-lg-6">
            <h1> Number: {numberOfQuestion}</h1>
            <h2>{data.title}</h2>
            <div className="card-body">
                <select onChange={(e) => result(e.target.value)}>
                    {data.answers.map((item, index) => {
                        return (
                            <option value={index}>{item.answer}</option>
                        )
                    })}
                </select>
            </div>
        </div>



    )
}

export default SelectCard;