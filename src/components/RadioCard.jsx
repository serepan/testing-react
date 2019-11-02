import React from 'react';
import "./../Scss/App.scss";

const RadioCard = ({ data, numberOfQuestion, setAnswer }) => {
    const result = (indexOfAnswerrArr) => {
        const answer = data.answers[indexOfAnswerrArr];
        setAnswer(answer.points)
    }
    return (
        <div className="booksList col-12">
            <h1> Вопрос №: {numberOfQuestion + 1}</h1>
            <h2>{data.title}</h2>
            <div className="card-body" >
                {data.answers.map((item, index) => {
                    return (
                        <div key={index - 68}>
                            <label htmlFor={`${data.title}-${index}`}>{item.answer}</label>
                            <input type="radio" name="radio" value={index} onChange={(e) => result(e.target.value)} id={`${data.title}-${index}`} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default RadioCard;