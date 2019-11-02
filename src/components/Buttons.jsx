import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {

    return (
        <div className="booksList buttons-to-test col-12">
            <h2>Вашему вниманию предлагается на выбор прохождение тестов по различным дисципинам </h2>
            <Link to='/geography-test' className="btn btn-primary">Geography</Link>
            <Link to='/biology-test' className="btn btn-secondary">Biology</Link>
        </div>
    )
}

export default Buttons;