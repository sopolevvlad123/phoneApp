import React from 'react';
import phoneData from '../dexieDB/MOCK_DATA.json';

export const PhoneBookContext = React.createContext(null);

const ADD_PHONE_NOTE = 'ADD_PHONE_NOTE';
const UPDATE_PHONE_NOTE = 'UPDATE_PHONE_NOTE';
const DELETE_PHONE_NOTE = 'DELETE_PHONE_NOTE';

export const addPhoneNote = (phoneNote) => ({
  type: ADD_PHONE_NOTE,
  payload: phoneNote,
});

export const updatePhoneNote = (phoneNote) => ({
  type: UPDATE_PHONE_NOTE,
  payload: phoneNote,
});

export const deletePhoneNote = (phoneNote) => ({
  type: DELETE_PHONE_NOTE,
  payload: phoneNote,
});

export const initialState = {
  phoneData,
};

export const phoneBookReducer = (state, action) => {
  switch (action.type) {
    case ADD_PHONE_NOTE:
      return {
        phoneData: [
          ...state.phoneData,
          {
            ...action.payload,
            id: state.phoneData[state.phoneData.length - 1].id + 1,
          },
        ],
      };
    case UPDATE_PHONE_NOTE:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE_PHONE_NOTE:
      return {
        phoneData: [...state.phoneData.filter((phoneNote) => phoneNote.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

