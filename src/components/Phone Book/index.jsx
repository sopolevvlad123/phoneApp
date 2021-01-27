import './style.scss';
import List from '@material-ui/core/List';
import React, { useContext } from 'react';
import { PhoneBookContext } from '../../context/reducer';
import PhoneAccountItem from './PhoneaccountItem';
import PhoneAccountCreationModal from './PhoneAccountCreationModal';

const PhoneBook = () => {
  const { state, dispatch } = useContext(PhoneBookContext);
  return (
    <div>
      <List className="phoneBook">
        {state.phoneAccounts.map((phoneAccount) => (
          <PhoneAccountItem phoneAccount={phoneAccount} dispatch={dispatch} />
        ))}
      </List>
      <div className="createModal">
        <PhoneAccountCreationModal dispatch={dispatch} buttonTitle="CREATE" />
      </div>
    </div>
  );
};

export default PhoneBook;
