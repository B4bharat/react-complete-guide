import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

function ExpenseList(props) {
  const { expenses } = props;
  const [filterYear, setFilterYear] = useState(2022);

  const changeYear = (year) => {
    setFilterYear(year);
  }


  return (
    <div>
      <ExpensesFilter onChangeYear={changeYear} />
      <Card className="expenses">
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </Card>
    </div>
  );
}

export default ExpenseList;