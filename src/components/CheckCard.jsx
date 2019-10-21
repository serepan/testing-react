import React, { useState, useEffect } from 'react';
import { questionsList } from '../data/questionsList'
import "../App.css"

const CheckCard = ({ data, numberOfQuestion }) => {
    return (

        <div className="booksList col-lg-6">
            <h1> Number: {numberOfQuestion}</h1>
            <h2>{data.title}</h2>
            <div className="card-body">
                
            </div>
        </div>
    )
}

export default CheckCard;