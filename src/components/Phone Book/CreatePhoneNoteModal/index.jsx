import { useModal } from 'react-modal-hook';
import Button from '@material-ui/core/Button';
import React from 'react';
import ReactModal from 'react-modal';
import PhoneNoteForm from '../PhoneNoteForm';

// eslint-disable-next-line react/prop-types
const CreatePhoneNoteModal = ({ buttonTitle, phoneNote, dispatch }) => {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <PhoneNoteForm phoneNote={phoneNote} dispatch={dispatch} />
      <Button onClick={hideModal}>Cancel</Button>
    </ReactModal>
  ));
  return <Button color="primary" onClick={showModal}>{buttonTitle}</Button>;
};

export default CreatePhoneNoteModal;
