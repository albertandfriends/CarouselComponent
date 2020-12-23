import React from 'react';

import styled from 'styled-components';

import {CloseIcon} from '../styles/AppStyles.js';

const ModalToDisplay = styled.div`position: fixed;
top: 300px;
left: 180px;
width: 40%;
height: 25%;
background-color: white;
z-index: 99999;
color:  #545454;
overlay: {
  background: #FFFF00
}
border: 1px solid #767676;
padding: 1rem;
border-radius: 8px;
outline: 0;
@media(max-width: 1000px) {
  width: 40%;
  height: 25%;
}
@media(max-width: 1000px) {
  width: 40%;
  height: 35%;
}
@media(max-width: 600px) {
  width: 40%;
  height: 45%;
}
`;


const MoreModal = ({handleClose, show, children}) => {
  if(show) {
  return (
      <ModalToDisplay>
        {children}
      <CloseIcon onClick={handleClose}/>
      </ModalToDisplay>
  );
  } else {
    return null;
  }
}

export default MoreModal;