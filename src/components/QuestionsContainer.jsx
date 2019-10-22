import React, { useState, useEffect } from 'react';
import TextCard from "./TextCard"
import SelectCard from "./SelectCard"
import CheckCard from "./CheckCard"
import RadioCard from "./RadioCard"
import Timer from "./Timer"


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
            <div className="booksList col-lg-6">
                <h1>Странные вопросы</h1>
                <Timer/>
            </div>
            {
                data.map((item, index) => {
                    switch (item.type) {
                        case "TEXT":
                            return <TextCard key={Math.random(new Date().getMilliseconds())} data={item} numberOfQuestion={index + 1} />
                        case "CHECKBOX":
                            return <CheckCard key={Math.random(new Date().getMilliseconds())} data={item} numberOfQuestion={index + 1} />
                        case "RADIO":
                            return <RadioCard key={Math.random(new Date().getMilliseconds())} data={item} numberOfQuestion={index + 1} />
                        case "SELECT":
                            return <SelectCard key={Math.random(new Date().getMilliseconds())} data={item}
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