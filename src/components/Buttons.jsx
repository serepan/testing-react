import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {

    return (
        <div className="booksList">
            <Link to='/geography-test' className="btn btn-primary">Geography</Link>
            <Link to='/biology-test' className="btn btn-secondary">Biology</Link>

        </div>
    )
}

export default Buttons;