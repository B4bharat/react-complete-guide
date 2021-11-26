import ExpenseItem from './ExpenseItem';

import './Expenses.css';

function ExpenseList(props) {
  const { expenses } = props;

  return (
    <div className="expenses">
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
}

export default ExpenseList;