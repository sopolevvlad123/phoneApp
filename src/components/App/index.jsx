import './style.scss';
import React, { useEffect } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import { ModalProvider } from 'react-modal-hook';
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
      <ModalProvider ariaHideApp={false}>
        <PhoneBookContext.Provider value={{ dispatch, state }}>
          <PhoneBook
            phoneAccounts={state.phoneAccounts}
            dispatch={dispatch}
            activeAccount={state.phoneAccounts.find((acc) => acc.id === state.activeAccountID)}
          />
        </PhoneBookContext.Provider>
      </ModalProvider>

    </div>
  );
};
export default App;
