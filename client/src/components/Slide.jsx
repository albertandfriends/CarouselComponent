import React from 'react';
import {TravelersChoice, TravelersPhotoLogo} from './AppStyles.js';
import ModalTravelers from './ModalTravelers.jsx';
import styled from 'styled-components';

var ImageSlide = styled.div``;

const Slide = ({ url, show, showTravelersModal, closeTravelersModal }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '325px',
    width: 'auto',
    position: 'relative',
    top: '-60px',
  };

  return (
    <ImageSlide style={styles}>
      <TravelersChoice src={"https://static.tacdn.com/img2/travelers_choice/2020/TC_L.svg"} onMouseEnter={() => showTravelersModal()} onMouseLeave={() => closeTravelersModal()}/>
          <ModalTravelers show={show}>
            <h3 style={{ color: "black" }}>What is Travelers' Choice?</h3>
            <p style={{ color: '#474747', textAlign: "left", width: "100%" }}>Tripadvisor gives a Travelers’ Choice award to accommodations, attractions and restaurants that consistently earn great reviews from travelers and are ranked within the top 10% of properties on Tripadvisor.</p>
          </ModalTravelers>


    </ImageSlide>
  );
}

export default Slide;