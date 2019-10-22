import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const  timer = props;

    return (
        <div>
            <p>Время на выполнение задания - 60 секунд - время пошло! -
            {new Date().getSeconds({ timer })}</p>
        </div>
    );
}

export default Timer;