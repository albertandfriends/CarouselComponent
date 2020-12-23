import React from 'react';
import {Component, CarouselDiv, CarouselPhotosButton, TravelersPhotoLogo, Camera, CloseIcon2} from '../styles/AppStyles.js';
import Carousel from './Carousel.jsx';
import {CameraIcon, inlineIcons} from '../SVGs/SvgStyles.js';
import {Image0} from '../styles/AppStyles.js';
import PhotosModal from '../modals/PhotosModal.jsx';
import axios from 'axios';

const ShowGalleryPhotosModal = ({handleClose,galleryShow, images}) => {
  if(galleryShow === true) {
  return (
  <PhotosModal show={galleryShow} handleClose={handleClose} images={images}>
  <Image0 src={images[0].urlLink}></Image0>
  <Image0 src={images[1].urlLink}></Image0>
  <Image0 src={images[2].urlLink}></Image0>
  <Image0 src={images[3].urlLink}></Image0>
  <Image0 src={images[4].urlLink}></Image0>
  <Image0 src={images[5].urlLink}></Image0>
  <Image0 src={images[6].urlLink}></Image0>
  <Image0 src={images[7].urlLink}></Image0>
  <Image0 src={images[9].urlLink}></Image0>
  <Image0 src={images[10].urlLink}></Image0>
  <Image0 src={images[11].urlLink}></Image0>
  <CloseIcon2 onClick = {() => handleClose()}/>
  </PhotosModal>
  );
} else {
  return null;
}
}


class ImageCarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travelersHovered: false,
      galleryShow: false,
      gallery: ["https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/orbs-of-light-floating.jpg"]
    }
    this.hideModal = this.hideModal.bind(this);
    this.showPhotosModal = this.showPhotosModal.bind(this);
  }
  hideModal() {
    this.setState({ galleryShow: false });
  };
  showPhotosModal() {
    if(this.state.galleryShow === false) {
      this.setState({galleryShow: true});
    } else {
      this.setState({galleryShow: false});
    }
  }
  componentDidMount() {
    axios.get('/api/trips/CarouselComponent/1/photos').then((response) => {
      this.setState({
        gallery: response.data
      })
    });
  }
  render() {
    return (
      <div>
         <Carousel show={this.state.travelersHovered}>
          </Carousel>
          <ShowGalleryPhotosModal galleryShow={this.state.galleryShow} handleClose={this.hideModal} images={this.state.gallery} />
          <CarouselPhotosButton onClick={() => this.showPhotosModal()}>
            All photos(11)
        </CarouselPhotosButton>
          <CameraIcon> {inlineIcons.Camera}{inlineIcons.CameraInside}</CameraIcon>
      </div>
    )
  }


}

export default ImageCarouselComponent;