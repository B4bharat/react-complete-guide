import React from 'react';

import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expense-title">Title</label>
          <input type="text" id="expense-title" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-amount">Amount</label>
          <input type="number" id="expense-amount" min="0.01" step="0.01"  />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-date">Date</label>
          <input type="date" id="expense-date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
