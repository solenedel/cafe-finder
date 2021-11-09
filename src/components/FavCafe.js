/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const FavCafe = (props) => {
  // eslint-disable-next-line
  const { fav, removeFavCafe } = props;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  const ConfirmButton = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    font-size: 24px;
    cursor: pointer;
  `;

  return (
    <div className="favCafe">
      <h4>{fav.cafe_name}</h4>
      <ul>
        <li>Wifi: {fav.has_wifi ? 'yes' : 'no'}</li>
        <li>Open 24 hours: {fav.is_open_24_hours ? 'yes' : 'no'}</li>
        <li>Organic coffee/tea: {fav.has_organic_tea_coffee ? 'yes' : 'no'}</li>
        <li>noise level: {fav.noise_level}</li>
      </ul>
      <ModalContainer>
        <ConfirmButton onClick={() => openModal()}>Modal button</ConfirmButton>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </ModalContainer>
      {/* <button type="button" onClick={() => removeFavCafe(fav.fav_id)}>
        Remove
      </button> */}
    </div>
  );
};

export default FavCafe;
