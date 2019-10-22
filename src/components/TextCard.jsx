import React, { useState, useEffect } from 'react';
import { questionsList } from '../data/questionsList'
import "../App.scss"

const TextCard = ({ data, numberOfQuestion }) => {
    return (
        
            
        <div className="booksList col-lg-6">
        <h1> Вопрос №: {numberOfQuestion}</h1>
        <h2>{data.title}</h2>
        <div className="card-body">
            <input type="text" placeholder="Введите Ваш вариант ответа..."/>
            
        </div>
    </div>
           
       

    )
} 

export default TextCard;