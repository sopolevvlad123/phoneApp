import './style.scss';
import List from '@material-ui/core/List';
import React from 'react';
import PhoneAccountItem from './PhoneaccountItem';
import PhoneAccountCreationModal from './PhoneAccountCreationModal';

const PhoneBook = ({ phoneAccounts, dispatch }) => (
  <div>
    <List className="phoneBook">
      {phoneAccounts.map((phoneAccount) => (
        <PhoneAccountItem phoneAccount={phoneAccount} dispatch={dispatch} />
      ))}
    </List>
    <div className="createModal">
      <PhoneAccountCreationModal dispatch={dispatch} buttonTitle="CREATE" />
    </div>
  </div>
);
export default PhoneBook;
