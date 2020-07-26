import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomingExpenses from './components/IncomingExpenses';
import History from './components/History';
import NewTransaction from './components/NewTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomingExpenses />
        <History />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
