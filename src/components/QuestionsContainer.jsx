import React, { useState, useEffect } from 'react';
import TextCard from "./TextCard"
import SelectCard from "./SelectCard"
import CheckCard from "./CheckCard"
import RadioCard from "./RadioCard"
// import Timer from "./Timer"


const QuestionsContainer = ({ data, setInitialState }) => {
    const [answersModel, setAnswersModel] = useState(new Array(data.length));

    // const [timer, setTimer] = useState(60);
    // useEffect(() => {
    //   setInterval(() => {
    //     setTimer(new Date().setSeconds(0, 0))
    //   }, 1000)
    // }, [timer]);

    useEffect(() => {
        console.log(answersModel)
    }, [answersModel])

    const resultTest = (arr) => {
        let newArr = arr.reduce((a, b) => a + b);
        console.log(newArr)
        return newArr;
    }

    const setAnswer = (index) => {
        return (pointerCount) => {
            const indexOfElement = index;
            let arr = [...answersModel];
            arr[indexOfElement] = pointerCount;
            setAnswersModel(arr)
        }
    }

    return (
        <div className="row">
            <div className="booksList col-lg-6">
                <h1>Странные вопросы</h1>
                <button className="btn btn-primary" onClick={() => setInitialState('')}>На главную</button>

            </div>
            {
                data.map((item, index) => {
                    switch (item.type) {
                        case "TEXT":
                            return <TextCard data={item} numberOfQuestion={index} setAnswer={setAnswer(index)} />
                        case "CHECKBOX":
                            return <CheckCard data={item} numberOfQuestion={index} setAnswer={setAnswer(index)} />
                        case "RADIO":
                            return <RadioCard data={item} numberOfQuestion={index} setAnswer={setAnswer(index)} />
                        case "SELECT":
                            return <SelectCard data={item}
                                numberOfQuestion={index}
                                setAnswer={setAnswer(index)} />
                        default: return null;
                    }
                })
            }
            <div className="booksList col-lg-6">
                <button onClick={() => resultTest(answersModel)} className="btn btn-secondary">Посмотреть результат</button>
            </div>

        </div>


    )
}

export default QuestionsContainer;