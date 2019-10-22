import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const { seconds, reset, isActive, start } = props;

  return (
    <div className="booksList col-lg-6">
      <h1>Предлагаем Вам пройти небольшой тест на знание простейших вопросов по всякой всячине. На всё-провсё дается 120 секунд</h1>
      <h2>{seconds}</h2>

      {!isActive && <button className="btn btn-primary" onClick={start}>Start</button>}

      {isActive && <button className="btn btn-secondary" onClick={reset}>Reset</button>}
    </div>
  )
}

export default Timer;