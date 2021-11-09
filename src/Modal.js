import React from 'react';
// import styled from 'styled-components';

const Modal = (props) => {
  // eslint-disable-next-line
  const { showModal, setShowModal } = props;
  return <>{showModal ? <div>Modal</div> : null}</>;
};

export default Modal;
