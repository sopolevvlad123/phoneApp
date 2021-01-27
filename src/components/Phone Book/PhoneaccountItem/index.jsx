import './style.scss';
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { confirmAlert } from 'react-confirm-alert';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import randomColor from 'randomcolor';
import Avatar from 'react-avatar';
import 'react-confirm-alert/src/react-confirm-alert.css';
import CreatePhoneNoteModal from '../PhoneAccountCreationModal';

const PhoneAccountItem = ({ phoneAccount, dispatch }) => {
  // refactor
  const deleteSubmit = () => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <div className="custom-ui">
          <h1>Are you sure?</h1>
          <Button color="primary" onClick={onClose}>No</Button>
          <Button
            color="secondary"
            onClick={() => {
              dispatch({ type: 'DELETE_PHONE_ACCOUNT', payload: phoneAccount });
              onClose();
            }}
          >
            Delete
          </Button>
        </div>
      ),
    });
  };

  return (
    <ListItem key={phoneAccount.id} alignItems="flex-start">
      <Avatar color={randomColor()} name={phoneAccount.name.charAt(0)} size="40" src={phoneAccount.avatar} />
      <ListItemText primary={phoneAccount.surname} />
      <ListItemText primary={phoneAccount.phone} />
      <ListItemSecondaryAction>
        <CreatePhoneNoteModal phoneAccount={phoneAccount} dispatch={dispatch} buttonTitle="EDIT" />
        <Button color="secondary" onClick={deleteSubmit}>DELETE </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default PhoneAccountItem;
