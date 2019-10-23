import React, { useState, useEffect } from 'react';
import "../App.scss"

const initialAnswers = answers => {
    return answers.map(answer => {
        return { ...answer, isChecked: false }
    })
}

const CheckCard = ({ data, numberOfQuestion, setAnswer }) => {
    const [arrOfAnswers, setArrOfAnswers] = useState(initialAnswers(data.answers))

    const checkFunction = (e, index) => {
        console.log(e.target.checked, index)
        const newArr = [...arrOfAnswers];
        newArr[index].isChecked = e.target.checked;
        let resultOfMistake = newArr
            .filter(el => el.isChecked && !el.points)
            .map(el => el.points)
        resultOfMistake = resultOfMistake.length / 2;

        let resultOfRight = newArr
            .filter(el => el.isChecked)
            .map(el => el.points)
        resultOfRight = resultOfRight.length ? resultOfRight.reduce((a, b) => a + b) : 0;
        setAnswer(resultOfRight - resultOfMistake)
    }

    return (
        <div className="booksList col-lg-6">
            <h1> Вопрос №: {numberOfQuestion + 1}</h1>
            <h2>{data.title}</h2>
            <div className="card-body" >
                {data.answers.map((item, index) => {
                    return (
                        <>
                            <label htmlFor={`${item.answer} - ${numberOfQuestion}`}>{item.answer}</label>
                            <input
                                type="checkbox"
                                placeholder="Enter your answer"
                                id={`${item.answer} - ${numberOfQuestion}`}
                                onChange={(e) => checkFunction(e, index)}
                            />
                        </>
                    )
                })
                }
            </div>
        </div>
    )
}

export default CheckCard;