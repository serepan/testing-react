import React, { useState } from 'react';
import "./../Scss/App.scss";

const initialAnswers = answers => {
    return answers.map(answer => {
        return { ...answer, isChecked: false }
    })
}

const CheckCard = ({ data, numberOfQuestion, setAnswer }) => {
    const [arrOfAnswers] = useState(initialAnswers(data.answers))

    const checkFunction = (e, index) => {
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
        <div className="booksList col-12">
            <h1> Вопрос №: {numberOfQuestion + 1}</h1>
            <h2>{data.title}</h2>
            <div className="card-body" >
                {data.answers.map((item, index) => {
                    return (
                        <div key={index + 255}>
                            <div key={index + 222}>
                                <label
                                    htmlFor={`${item.answer} - ${numberOfQuestion}`}
                                    key={index + 232}> {item.answer}
                                </label>
                                <input
                                    key={index + 2335}
                                    type="checkbox"
                                    placeholder="Enter your answer"
                                    id={`${item.answer} - ${numberOfQuestion}`}
                                    onChange={(e) => checkFunction(e, index)}
                                />
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default CheckCard;