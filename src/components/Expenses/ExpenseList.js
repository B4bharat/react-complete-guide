import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

function ExpenseList(props) {
  const { expenses } = props;
  const [filterYear, setFilterYear] = useState('2021');

  const changeYear = (year) => {
    setFilterYear(year);
  }

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === parseInt(filterYear));

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
          <ExpenseItem key={expense.id} {...expense} />
        ));
  }

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter filterYear={filterYear} onChangeYear={changeYear} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default ExpenseList;