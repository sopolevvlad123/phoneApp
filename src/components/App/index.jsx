import './style.scss';
import React, { useEffect } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import { PhoneBookContext, initialState, phoneBookReducer } from '../../context/reducer';
import PhoneBook from '../Phone Book';
import asyncActionHandlers from '../../context/asyncHandlers';

const App = () => {
  const [state, dispatch] = useReducerAsync(phoneBookReducer, initialState, asyncActionHandlers);

  useEffect(() => {
    dispatch({ type: 'LOAD_ACCOUNTS' });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>PHONE BOOK APP</h1>
      </header>
      <PhoneBookContext.Provider value={{ dispatch, state }}>
        <PhoneBook phoneAccounts={state.phoneAccounts} dispatch={dispatch} activeAccountID={state.activeAccountID} />
      </PhoneBookContext.Provider>
    </div>
  );
};
export default App;
