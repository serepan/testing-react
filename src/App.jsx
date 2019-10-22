import React, { useState, useEffect } from 'react';
import { questionsList } from './data/questionsList'
import QuestionsContainer from './components/QuestionsContainer'
import './App.scss';


const App = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTimer(new Date().setSeconds(0))
    }, 1000)
  }, [timer]);

  return (
    <div className="container">
      <QuestionsContainer data={questionsList} />
    </div>
  )
}
export default App;

