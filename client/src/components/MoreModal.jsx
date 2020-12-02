import React from 'react';

import styled from 'styled-components';

import {CloseIcon} from './AppStyles.js';

const ModalToDisplay = styled.div`position:absolute;
width:40%;
right: 35%;
height: 27%;
background-color: white;
z-index: 999;
color:  #545454;
overlay: {
  background: #FFFF00
}
top: 550px;
border: 1px solid #767676;
padding: 1rem;
border-radius: 8px;
outline: 0;
@media(max-width: 1000px) {
  width:50%;
  height: 47%;
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