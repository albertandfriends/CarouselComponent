import React from 'react';
import {Button, Title, Rating, Reviews, TextHeader, SpanText, H4Text, Text, Heart, IconShare, Text2, CarouselFooter, CarouselFooterText, CarouselFooterTextTwo, CarouselFooterImage, CarouselFooterButton, WhiteArrowDown, Divider, OverviewDiv, OverviewText, OverviewPar, OverviewMoreSpan, OverviewFirstClock, OverviewHoursText, OverviewHoursText2, OverviewHoursAnchor, OverviewDurationClock, OverviewDurationText, OverviewHoursText3, OverviewAddress, OverviewAddressText, OverviewAddressText2, OverviewMapSpan, OverviewImproveSpan, OverviewPencil, TravelersChoice,
CarouselPhotosButton, TravelersPhotoLogo, ContainerDivRatingAndReviews} from './AppStyles.js';

import styled from 'styled-components';

const ModalToDisplay = styled.div`position:absolute;
width:100%;
height: 100%;
background-color: white;
border-radius: 0.25rem;
z-index: 999;
top:0%;
left:0%;
text-align: center;
color:  #545454;
display: block;
`;

const PhotosModal = ({ handleClose, show, children, images }) => {
  if(show) {
  return (
    <ModalToDisplay>
        {children}
        <h1>{images}</h1>
    </ModalToDisplay>
  );
  } else {
    return null;
  }
}

export default PhotosModal;
