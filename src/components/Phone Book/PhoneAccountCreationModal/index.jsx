import { useModal } from 'react-modal-hook';
import Button from '@material-ui/core/Button';
import React from 'react';
import ReactModal from 'react-modal';
import PhoneNoteForm from '../PhoneAccountForm';

const PhoneAccountCreationModal = ({ buttonTitle, phoneAccount, dispatch }) => {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <PhoneNoteForm phoneAccount={phoneAccount} dispatch={dispatch} hideModal={hideModal} />
      <Button onClick={hideModal}>Cancel</Button>
    </ReactModal>
  ));
  return <Button color="primary" onClick={showModal}>{buttonTitle}</Button>;
};

export default PhoneAccountCreationModal;
