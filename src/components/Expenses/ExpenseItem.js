import React,  { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

function ExpenseItem(props) {
  const { title, amount, date } = props;
  const [itemTitle, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle('Updated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
  </Card>
  )
}

export default ExpenseItem;