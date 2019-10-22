import React from 'react';
import "../App.scss"

const CheckCard = ({ data, numberOfQuestion }) => {
    return (

        <div className="booksList col-lg-6">
            <h1> Вопрос №: {numberOfQuestion + 1}</h1>
            <h2>{data.title}</h2>
            <div className="card-body" >
                {data.answers.map((item) => {
                    return (
                        <label key={data.title + Math.random(new Date().getMilliseconds())}><input type="checkbox" />{item.answer}</label>
                    )
                })
                }
            </div>
        </div>
    )
}

export default CheckCard;