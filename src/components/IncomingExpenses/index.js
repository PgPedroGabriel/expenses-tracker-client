import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './style.css';

const IncomingExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const totalIncomming = transactions
    .filter(transaction => transaction.amount >= 0)
    .reduce((acc, current) => acc + current.amount, 0)
    .toFixed(2);

  const totalExpense = (
    transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((acc, current) => acc + current.amount, 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+ ${totalIncomming}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">- ${totalExpense}</p>
      </div>
    </div>
  );
};

export default IncomingExpenses;
