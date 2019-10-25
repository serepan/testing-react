import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {

    return (
        <div className="booksList">
            <Link to='/QuestionsContainer' className="btn btn-primary">Geography</Link>
            <Link to='/QuestionsContainer2' className="btn btn-secondary">Biology</Link>

        </div>
    )
}

export default Buttons;