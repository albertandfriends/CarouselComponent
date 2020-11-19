import React from 'react';
import {Button, Title, Rating, Reviews, TextHeader, SpanText, H4Text, Text, Heart, IconShare, Text2, CarouselFooter, CarouselFooterText, CarouselFooterTextTwo, CarouselFooterImage, CarouselFooterButton, WhiteArrowDown, Divider, OverviewDiv, OverviewText, OverviewPar, OverviewMoreSpan, OverviewFirstClock, OverviewHoursText, OverviewHoursText2, OverviewHoursAnchor, OverviewDurationClock, OverviewDurationText, OverviewHoursText3, OverviewAddress, OverviewAddressText, OverviewAddressText2, OverviewMapSpan, OverviewImproveSpan, OverviewPencil, TravelersChoice,
CarouselPhotosButton, TravelersPhotoLogo} from './AppStyles.js';
import {CloseIcon} from './AppStyles.js';

import styled from 'styled-components';

const ModalToDisplay = styled.div`position:absolute;
width:25%;
height: 10%;
background-color: white;
z-index: 999;
top:80%;
left:20%;
text-align: center;
color:  #545454;
display: block;
border: 1px solid #767676;
padding: 1rem;
border-radius: 8px;
outline: 0;
`;

const HoursModal = ({ handleClose, show, children }) => {
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

export default HoursModal;