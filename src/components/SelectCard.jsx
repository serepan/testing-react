import React from 'react';
import "../App.scss"

const SelectCard = ({ data, numberOfQuestion, setAnswer }) => {
    const result = (indexOfAnswerrArr) => {
        const answer = data.answers[indexOfAnswerrArr];
        setAnswer(answer.points)
    }
    return (

        <div className="booksList col-lg-6">
            <h1> Вопрос №: {numberOfQuestion + 1}</h1>
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