import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {

    let answers = JSON.parse(localStorage.getItem('answers')) || [];
    console.log(answers)

    let result = answers.length && answers
        .filter(el => typeof el === 'number')
        .reduce((a, b) => a + b);

    return (
        <div className="row">
            <div className="booksList col-lg-6" >
                <h1>Вы набрали {result} баллов из 10 возможных</h1>
                <Link to='/' className="btn btn-secondary">Назад к выбору теста</Link>
            </div>
        </div>
    )
}

export default Result;