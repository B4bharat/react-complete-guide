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

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter filterYear={filterYear} onChangeYear={changeYear} />
        {filteredExpenses.map(expense => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </Card>
    </div>
  );
}

export default ExpenseList;