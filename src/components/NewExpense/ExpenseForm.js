import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  const { onCancel } = props;

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (evt) => {
    setTitle(evt.target.value);
  };

  const amountChangeHandler = (evt) => {
    setAmount(evt.target.value);
  };

  const dateChangeHandler = (evt) => {
    setDate(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='expense-title'>Title</label>
          <input
            type='text'
            id='expense-title'
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='expense-amount'>Amount</label>
          <input
            type='number'
            id='expense-amount'
            value={amount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='expense-date'>Date</label>
          <input
            type='date'
            id='expense-date'
            value={date}
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
