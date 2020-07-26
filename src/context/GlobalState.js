import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// inital state
const initialState = {
  transactions: [],
};

// create Context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    const currentDate = new Date();
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: {
        ...transaction,
        id: state.transactions.length + 1,
        day: currentDate.getDate(),
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
