import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';
import { MonthName } from '../../helpers/DateHelper';

import './style.css';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const totalBalance = transactions.reduce(
    (acc, current) => acc + current.amount,
    0,
  );
  const signal = totalBalance >= 0 ? '+' : '-';
  const className = totalBalance >= 0 ? 'positive' : 'negative';

  const month = MonthName[new Date().getMonth()];

  return (
    <>
      <h4>Your balance</h4>
      <h1 className={className}>
        {signal} ${Math.abs(totalBalance).toFixed(2)}
        <span>{month}</span>
      </h1>
    </>
  );
};

export default Balance;
