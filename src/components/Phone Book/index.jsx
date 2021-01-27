import './style.scss';
import List from '@material-ui/core/List';
import React, { useContext } from 'react';
import { PhoneBookContext } from '../../context/reducer';
import PhoneNoteItem from './PhoneNoteElement';
import CreatePhoneNoteModal from './CreatePhoneNoteModal';

const PhoneBook = () => {
  const { state, dispatch } = useContext(PhoneBookContext);

  return (
    <div>
      <List className="phoneBook">
        {state.phoneData.map((phoneNote) => (
          <PhoneNoteItem phoneNote={phoneNote} dispatch={dispatch} />
        ))}
      </List>
      <div className="createModal">
        <CreatePhoneNoteModal dispatch={dispatch} buttonTitle="CREATE" />
      </div>
    </div>
  );
};

export default PhoneBook;
