import React from 'react';
import {Button, Title, Rating, Reviews, TextHeader, SpanText, H4Text, Text, Heart, IconShare, Text2, CarouselFooter, CarouselFooterText, CarouselFooterTextTwo, CarouselFooterImage, CarouselFooterButton, WhiteArrowDown, Divider, OverviewDiv, OverviewText, OverviewPar, OverviewMoreSpan, OverviewFirstClock, OverviewHoursText, OverviewHoursText2, OverviewHoursAnchor, OverviewDurationClock, OverviewDurationText, OverviewHoursText3, OverviewAddress, OverviewAddressText, OverviewAddressText2, OverviewMapSpan, OverviewImproveSpan, OverviewPencil, TravelersChoice,
CarouselPhotosButton, TravelersPhotoLogo} from './AppStyles.js';

import styled from 'styled-components';

const ModalToDisplay = styled.div`position:absolute;
width:15%;
height: 10%;
background-color: white;
border-radius: 10px;
z-index: 999;
top:18%;
left:20%;
text-align: center;
color:  #545454;
display: block;
`;

const ModalTravelers = ({show, children }) => {
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

export default ModalTravelers;