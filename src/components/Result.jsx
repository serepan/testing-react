import React, { useState, useEffect } from 'react';

const Result = (props) => {
let answersModel = props;


    let result = answersModel.reduce((a, b) => a + b);


    return (
        <div className="row">
            <div className="booksList col-lg-6" >
                <h1>Вы набрали {result}  баллов</h1>
            </div>
        </div>
    )
}

export default Result;