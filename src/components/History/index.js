import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import Transaction from './Transaction';
import './style.css';

const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      {transactions.length > 0 && (
        <>
          <h3>History</h3>
          <ul className="list">
            {transactions.map(transaction => (
              <Transaction key={transaction.id} obj={transaction} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default History;
