import React, { useContext } from 'react';
import { numberWithCommas } from '../utils/format';

import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext);

  let income = transactions.map(transaction => transaction.amount)
  income = income.filter(transaction => transaction > 0);
  income = income.reduce((acc, item) => (acc += item), 0).toFixed(2);

  let expense = transactions.map(transaction => transaction.amount)
  expense = expense.filter(transaction => transaction < 0);
  expense = (expense.reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${numberWithCommas(expense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
