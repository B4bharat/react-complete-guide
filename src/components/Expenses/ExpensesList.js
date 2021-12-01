import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpensesList(props) {
  const { expenses } = props;

  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {
         expenses.map(expense => (
          <ExpenseItem key={expense.id} {...expense} />
        ))
      }
    </ul>
  )
}

export default ExpensesList
