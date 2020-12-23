import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageCarouselHeader from './ImageCarouselHeader.jsx';
import ImageCarouselFooter from './ImageCarouselFooter.jsx';
import ImageCarousel from './ImageCarouselComponent.jsx';
import {Component, CarouselDiv, CarouselPhotosButton, TravelersPhotoLogo} from '../styles/AppStyles.js';
import Modal from '../modals/Modal.jsx';
import Carousel from './Carousel.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: '',
      travelersHovered: false,
      galleryShow: false,
    }
  }
  hideModal() {
    this.setState({ galleryShow: false });
  };

  componentDidMount() {
    axios.get('/api/trips/CarouselComponent/1/reviews').then(
      (response) => {
        this.setState({
         reviewCount: response.data[0].reviewCount.toLocaleString('en')
        })
      }
    );
  }

  render() {
    return (
          <Component>
          <ImageCarouselHeader reviewCount = {this.state.reviewCount}/>
          <ImageCarousel/>
          <ImageCarouselFooter/>
          </Component>
    );
  }
}

export default App;

/*https://static.tacdn.com/img2/travelers_choice/2020/TC_L.svg*/
/*







*/
