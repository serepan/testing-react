import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {

    let answers = JSON.parse(localStorage.getItem('answers')) || [];
    console.log(answers)

    let result = answers.filter(el => typeof el === 'number')
    if (result.length) {
        result = result.reduce((a, b) => a + b)
    } else {
        result = 0;
    }

    return (
        <div className="row">
            <div className="booksList col-12" >
                <h1>Вы набрали {result} из 10 возможных баллов</h1>
                <Link to='/' className="btn btn-secondary">Назад к выбору теста</Link>
            </div>
        </div>
    )
}

export default Result;