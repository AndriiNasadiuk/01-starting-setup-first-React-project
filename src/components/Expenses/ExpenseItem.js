import React from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)

    //function clickHandler
    const clickHandler = () => {
        setTitle('Updated')
        console.log(title);
}

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h1>{title}</h1>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;