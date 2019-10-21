import React, { useState, useEffect } from 'react';
import { questionsList } from './../data/questionsList'
import TextCard from "./TextCard"
import SelectCard from "./SelectCard"
import CheckCard from "./CheckCard"
import RadioCard from "./RadioCard"


const QuestionsContainer = ({ data }) => {
    const [answersModel, setAnswersModel] = useState(new Array(data.length));

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

            {
                data.map((item, index) => {
                    switch (item.type) {
                        case "TEXT":
                            return <TextCard data={item} numberOfQuestion={index + 1} />
                        case "CHECKBOX":
                            return <CheckCard data={item} numberOfQuestion={index + 1} />
                        case "RADIO":
                            return <RadioCard data={item} numberOfQuestion={index + 1} />
                        case "SELECT":
                            return <SelectCard data={item}
                                numberOfQuestion={index + 1}
                                setAnswer={setAnswer(index)} />
                        default: return null;
                    }
                })
            }
        </div>


    )
}

export default QuestionsContainer;