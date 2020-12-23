import React from 'react';
import {Button, Title, Rating, Reviews, TextHeader, SpanText, H4Text, Text, Heart, IconShare, Text2, CarouselFooter, CarouselFooterText, CarouselFooterTextTwo, CarouselFooterImage, CarouselFooterButton, WhiteArrowDown, Divider, OverviewDiv, OverviewText, OverviewPar, OverviewMoreSpan, OverviewFirstClock, OverviewHoursText, OverviewHoursText2, OverviewHoursAnchor, OverviewDurationClock, OverviewDurationText, OverviewHoursText3, OverviewAddress, OverviewAddressText, OverviewAddressText2, OverviewMapSpan, OverviewImproveSpan, OverviewPencil, TravelersChoice,
CarouselPhotosButton, TravelersPhotoLogo} from '../styles/AppStyles.js';
import {CloseIcon} from '../styles/AppStyles.js';

import styled from 'styled-components';

const ModalToDisplay = styled.div`position:relative;
left: 70px;
top: -90px;
width: 100px;
height: 150px;
background-color: white;
z-index: 999;
text-align: center;
color:  #545454;
border: 1px solid #767676;
padding: 1rem;
border-radius: 8px;
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