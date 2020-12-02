import React from 'react';
import {Button, Title, Rating, Reviews, TextHeader, SpanText, H4Text, Text, Heart, IconShare, Text2, CarouselFooter, CarouselFooterText, CarouselFooterTextTwo, CarouselFooterImage, CarouselFooterButton, WhiteArrowDown, Divider, OverviewDiv, OverviewText, OverviewPar, OverviewMoreSpan, OverviewFirstClock, OverviewHoursText, OverviewHoursText2, OverviewHoursAnchor, OverviewDurationClock, OverviewDurationText, OverviewHoursText3, OverviewAddress, OverviewAddressText, OverviewAddressText2, OverviewMapSpan, OverviewImproveSpan, OverviewPencil, TravelersChoice,
CarouselPhotosButton, TravelersPhotoLogo} from './AppStyles.js';

import styled from 'styled-components';

const ModalToDisplay = styled.div`position:relative;
right: -62%;
top: -8%;
background-color: white;
z-index: 999;
text-align: center;
color:  #545454;
border: 1px solid #767676;
padding: 1rem;
outline: 0;
height: 70px;
width: 100px;
box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
&:after {
  content: "";
  position: absolute;
  top: -webkit-calc(100% - 10px); /*may require prefix for old browser support*/
  top: calc(100% - 113px); /*i.e. half the height*/
  left: 95px;
  height: 18px;
  width: 18px;
  background: white;
  transform: rotate(225deg);
  border-bottom:inherit;
  border-right:inherit;
}
}
`;

const Modal = ({ handleClose, show, children }) => {
  if(show) {
  return (
    <ModalToDisplay>
        {children}
    </ModalToDisplay>
  );
  } else {
    return null;
  }
}

export default Modal;