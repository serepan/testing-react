import React, { useState, useEffect } from 'react';
import TextCard from "./TextCard"
import SelectCard from "./SelectCard"
import CheckCard from "./CheckCard"
import RadioCard from "./RadioCard"
import ClickToResult from './ClickToResult'
import { Link } from 'react-router-dom';
import Timer from "./Timer"


const QuestionsContainer = ({ data, isActive, setIsActive }) => {
    const [answersModel, setAnswersModel] = useState(new Array(data.length));
    // const [seconds, setSeconds] = useState(120);

    // const start = () => {
    //     setIsActive(!isActive);
    // }

    // const reset = () => {
    //     setSeconds(120);
    //     setIsActive(false);
    // }

    // useEffect(() => {
    //     let interval = null;
    //     if (isActive) {
    //         interval = setInterval(() => {
    //             setSeconds((seconds) => {
    //                 if (seconds > 0) { return --seconds }
    //             });
    //         }, 1000);
    //     } else if (!isActive && seconds !== 0) {
    //         clearInterval(interval);
    //     }
    //     return () => clearInterval(interval);
    // }, [isActive, seconds]);

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

    return (
        <div className="row">
            <div className="booksList col-lg-6">
                <h1>Странные вопросы</h1>
                <Link className="btn btn-primary" to='/'>На главную</Link>
                <Timer />
            </div>
            {
                !isActive && data.map((item, index) => {
                    switch (item.type) {
                        case "TEXT":
                            return <TextCard
                                data={item}
                                numberOfQuestion={index}
                                setAnswer={setAnswer(index)}
                                // isActive={isActive}
                                // setIsActive={setIsActive}
                            />
                        case "CHECKBOX":
                            return !isActive && <CheckCard
                                data={item}
                                numberOfQuestion={index}
                                setAnswer={setAnswer(index)}
                                // isActive={isActive}
                                // setIsActive={setIsActive}
                            />
                        case "RADIO":
                            return <RadioCard
                                data={item}
                                numberOfQuestion={index}
                                setAnswer={setAnswer(index)}
                                // isActive={isActive}
                                // setIsActive={setIsActive}
                            />
                        case "SELECT":
                            return !isActive && <SelectCard data={item}
                                numberOfQuestion={index}
                                setAnswer={setAnswer(index)}
                                // isActive={isActive}
                                // setIsActive={setIsActive}
                            />
                        default: return null;

                    }
                })

            }

            <ClickToResult
                answersModel={answersModel} />
        </div>


    )
}

export default QuestionsContainer;