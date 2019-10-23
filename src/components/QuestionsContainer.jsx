import React, { useState, useEffect } from 'react';
import TextCard from "./TextCard"
import SelectCard from "./SelectCard"
import CheckCard from "./CheckCard"
import RadioCard from "./RadioCard"
// import Timer from "./Timer"


const QuestionsContainer = ({ data }) => {
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

    const setAnswer = (index) => {
        return (pointerCount) => {
            const indexOfElement = index;
            let arr = [...answersModel];
            arr[indexOfElement] = pointerCount;
            setAnswersModel(arr)
        }
    }

    // const setAnswerText = (e) => {           // попытки работать с текстовым полем
    //     return (pointerCount) => {
    //         let result = e.target.value;
    //         let arr = [...answersModel];
    //         if (result.includes(data.answers)) {
    //
    //         }
    //         setAnswersModel(arr)
    //     }
    // }

    return (
        <div className="row">
            <div className="booksList col-lg-6">
                <h1>Странные вопросы</h1>

            </div>
            {
                data.map((item, index) => {
                    switch (item.type) {
                        case "TEXT":
                            return <TextCard data={item} numberOfQuestion={index} setAnswer={setAnswer(index)} />
                        case "CHECKBOX":
                            return <CheckCard data={item} numberOfQuestion={index} setAnswer={setAnswer(index)} />
                        case "RADIO":
                            return <RadioCard key={Math.random(new Date().getMilliseconds())} data={item} numberOfQuestion={index} setAnswer={setAnswer(index)} />
                        case "SELECT":
                            return <SelectCard key={Math.random(new Date().getMilliseconds())} data={item}
                                numberOfQuestion={index}
                                setAnswer={setAnswer(index)} />
                        default: return null;
                    }
                })
            }
        </div>


    )
}

export default QuestionsContainer;