import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

function ExpenseList(props) {
  const { expenses } = props;

  return (
    <Card className="expenses">
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
}

export default ExpenseList;