import './style.scss';
import List from '@material-ui/core/List';
import React from 'react';
import PhoneAccountItem from './PhoneaccountItem';
import PhoneAccountCreationModal from './PhoneAccountCreationModal';
import ActiveAccountInfoTab from './ActiveAccountInfoTab';

const PhoneBook = ({ phoneAccounts, dispatch, activeAccount }) => (
  <div className="phoneBookContainer">
    <div className="phoneBook">
      <List className="phoneBookList">
        {phoneAccounts.map((phoneAccount) => (
          <PhoneAccountItem phoneAccount={phoneAccount} dispatch={dispatch} />
        ))}
      </List>
      <div className="createModal">
        <PhoneAccountCreationModal dispatch={dispatch} buttonTitle="CREATE" />
      </div>
    </div>
    {activeAccount
      && <ActiveAccountInfoTab activeAccount={activeAccount} />}
  </div>
);
export default PhoneBook;
