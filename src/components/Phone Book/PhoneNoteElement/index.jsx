import './style.scss';
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { confirmAlert } from 'react-confirm-alert';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import randomColor from 'randomcolor';
import Avatar from 'react-avatar';
import { deletePhoneNote } from '../../../context/reducer';
import 'react-confirm-alert/src/react-confirm-alert.css';
import CreatePhoneNoteModal from '../CreatePhoneNoteModal';

const PhoneNoteItem = ({ phoneNote, dispatch }) => {
  const deleteSubmit = () => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <div className="custom-ui">
          <h1>Are you sure?</h1>
          <Button color="primary" onClick={onClose}>No</Button>
          <Button
            color="secondary"
            onClick={() => {
              dispatch(deletePhoneNote(phoneNote));
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
    <ListItem key={phoneNote.id} alignItems="flex-start">
      <Avatar color={randomColor()} name={phoneNote.name} size="40" src={phoneNote.avatar} />
      <ListItemText primary={phoneNote.surname} />
      <ListItemText primary={phoneNote.phone} />
      <ListItemSecondaryAction>
        <CreatePhoneNoteModal dispatch={dispatch} phoneNote={phoneNote} buttonTitle="EDIT" />
        <Button color="secondary" onClick={deleteSubmit}>DELETE </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default PhoneNoteItem;
