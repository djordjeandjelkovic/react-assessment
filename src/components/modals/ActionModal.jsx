import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalTitle,
  ModalContent,
  ModalAction,
  ButtonConfirm,
  ButtonCancel,
  ModalTitleAlert
} from '@components/styled-components/Task';
import Modal from './Modal';

const ActionModal = (props) => {
  const {
    open, setOpen, title, confirmButtonText, cancelButtonText, confirmAction, children
  } = props;

  return (
    <Modal open={open} setOpen={setOpen}>
      <ModalTitle>
        <ModalTitleAlert src="images/alert.jpg" width="20" alt="alert" />
        <strong>
          {title}
        </strong>
      </ModalTitle>
      <ModalContent>
        {children}
      </ModalContent>
      <ModalAction>
        <ButtonConfirm onClick={confirmAction}>
          <strong>{confirmButtonText}</strong>
        </ButtonConfirm>
        <ButtonCancel onClick={() => setOpen(false)}>
          <strong>{cancelButtonText}</strong>
        </ButtonCancel>
      </ModalAction>
    </Modal>
  );
};

ActionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  confirmButtonText: PropTypes.string.isRequired,
  cancelButtonText: PropTypes.string.isRequired,
  confirmAction: PropTypes.func.isRequired,
  children: PropTypes.node
};

ActionModal.defaultProps = {
  children: null,
};

export default ActionModal;
