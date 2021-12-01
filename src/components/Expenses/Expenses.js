import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

function Expenses(props) {
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
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;