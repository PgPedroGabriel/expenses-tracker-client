import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Transaction = ({ obj }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const classType = obj.amount >= 0 ? 'plus' : 'minus';
  const signal = obj.amount >= 0 ? '+' : '-';

  const hanldeDelete = id => deleteTransaction(id);

  return (
    <li className={classType}>
      {obj.text}
      <span>
        {signal}${Math.abs(obj.amount).toFixed(2)}
      </span>
      <button onClick={() => hanldeDelete(obj.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
