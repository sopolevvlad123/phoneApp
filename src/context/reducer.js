import React from 'react';

export const PhoneBookContext = React.createContext(null);

const ADD_PHONE_ACCOUNT = 'ADD_PHONE_ACCOUNT';
const UPDATE_PHONE_ACCOUNT = 'UPDATE_PHONE_NOTE';
const DELETE_PHONE_ACCOUNT = 'DELETE_PHONE_NOTE';
const ADD_ACCOUNTS = 'ADD_INIT_ACCOUNTS';
const SET_ACTIVE_ACCOUNT_INFO = 'SET_ACTIVE_ACCOUNT_INFO';

export const addPhoneAccount = (phoneAccount) => ({
  type: ADD_PHONE_ACCOUNT,
  payload: phoneAccount,
});

export const updatePhoneAccount = (phoneAccount) => ({
  type: UPDATE_PHONE_ACCOUNT,
  payload: phoneAccount,
});

export const deletePhoneAccount = (phoneAccount) => ({
  type: DELETE_PHONE_ACCOUNT,
  payload: phoneAccount,
});

export const addAccounts = (phoneAccount) => ({
  type: ADD_ACCOUNTS,
  payload: phoneAccount,
});

export const showActiveAccountInfo = (phoneAccountID) => ({
  type: SET_ACTIVE_ACCOUNT_INFO,
  payload: phoneAccountID,
});

export const initialState = {
  phoneAccounts: [],
  activeAccountID: null,
};

export const phoneBookReducer = (state, action) => {
  switch (action.type) {
    case ADD_ACCOUNTS: return { phoneAccounts: action.payload };
    case ADD_PHONE_ACCOUNT:
      return {
        phoneAccounts: [
          ...state.phoneAccounts,
          action.payload,
        ],
      };
    case UPDATE_PHONE_ACCOUNT: {
      const index = state.phoneAccounts.findIndex((x) => x.id === action.payload.id);
      return {
        ...state,
        phoneAccounts: [
          ...state.phoneAccounts.slice(0, index),
          action.payload,
          ...state.phoneAccounts.slice(index + 1),
        ],
      };
    }
    case DELETE_PHONE_ACCOUNT:
      return {
        ...state,
        phoneAccounts: [...state.phoneAccounts.filter((phoneNote) => phoneNote.id !== action.payload.id)],
      };
    case SET_ACTIVE_ACCOUNT_INFO:
      return {
        ...state,
        activeAccountID: action.payload,
      };
    default:
      return state;
  }
};
