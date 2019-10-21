import React, { useState, useEffect } from 'react';
import { questionsList } from './data/questionsList'
import QuestionsContainer from './components/QuestionsContainer'
import './App.css';


const App = () => {

  // useEffect(() => {
  //   axios.get('https://www.googleapis.com/books/v1/volumes?q=quilting=3:keyes&key=AIzaSyCDl054-0cMSrKLWD8skCwpQ1URdZYb0Ks').then(res => {
  //     setBooks(res.data.items)
  //     console.log(res.data.items)
  //   })
  // }, [])

  return (
    <div className="container">
     <QuestionsContainer data={questionsList}/>
    </div>
  )
}
export default App;

