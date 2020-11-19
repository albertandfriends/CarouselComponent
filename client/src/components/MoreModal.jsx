import React from 'react';

import styled from 'styled-components';

import {CloseIcon} from './AppStyles.js';

const ModalToDisplay = styled.div`position:absolute;
width:50%;
height: 25%;
background-color: white;
z-index: 999;
top:42%;
left:27%;
color:  #545454;
display: block;
overlay: {
  background: #FFFF00
}
border: 1px solid #767676;
padding: 1rem;
border-radius: 8px;
outline: 0;
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