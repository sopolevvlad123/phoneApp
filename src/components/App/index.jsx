import './style.scss';
import React, { useEffect, useReducer } from 'react';
import { PhoneBookContext, initialState, phoneBookReducer } from '../../context/reducer';
import PhoneBook from '../Phone Book';
import { initDB } from '../../dexieDB';

const App = () => {
  const [state, dispatch] = useReducer(phoneBookReducer, initialState);

  useEffect(() => {
    initDB().then(() => {
      console.log('db was initialized');
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>PHONE BOOK APP</h1>
      </header>
      <PhoneBookContext.Provider value={{ dispatch, state }}>
        <PhoneBook />
      </PhoneBookContext.Provider>
    </div>
  );
};
export default App;
