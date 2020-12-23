import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../modals/Modal.jsx';
import { Title, Rating, Reviews, RatingAndReviewDiv, TextDivs, TextDiv1, PTag, Text, TextDiv2, TextHeader, IconDivs, EmailTag, CopyTag, IconShare} from '../styles/ImageCarouselHeaderStyles.js';
var shareIcon = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/images/shareIcon.png';
var ShareIconBlack = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/shareIconBlack.png';
import {Heart2, inlineIcons, InlineIcon, SVG} from '../SVGs/SvgStyles.js';
// import {ShareIconBlack} from '../../../images/images.js';

const ImgShare = ({ success, enteredShare, showModal }) => (
  <IconShare onMouseEnter={() => enteredShare()} onMouseLeave={() => enteredShare()} src={success ? shareIcon : ShareIconBlack} onClick = {showModal}/>
);

class ImageCarouselHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredShare: true,
      reviewCount: '',
      show: false

    }
    this.showModal = this.showModal.bind(this);
    this.enterShareImage = this.enterShareImage.bind(this);
  }
  componentDidMount() {
    axios.get('/api/trips/CarouselComponent/1/reviews').then(
      (response) => {
        this.setState({
         reviewCount: response.data[0].reviewCount.toLocaleString('en')
        })
      }
    );
  }
  enterShareImage() {
    if(this.state.enteredShare === false) {
    this.setState({
      enteredShare: true
    })
  } else {
    this.setState({
      enteredShare: false
    })
  }
  }
  showModal() {
    if(this.state.show === false) {
    this.setState({ show: true });
    } else {
      this.setState({show: false});
    }
  };
  render() {
      return (
        <div>
          <Title>Winchester Mystery House</Title>
          <RatingAndReviewDiv>
          <Rating style={{ rating: 4}} > </Rating>
          <Reviews>{this.state.reviewCount} Reviews</Reviews>
          </RatingAndReviewDiv>
          <TextHeader>
          <TextDivs>
          <TextDiv1>
          <PTag>#12</PTag> <p style={{letterSpacing: "-.5px"}}> of 139</p> <Text>things to do in San Jose</Text>
          </TextDiv1>
          <TextDiv2>
          <Text style={{marginRight: '0px', marginLeft: '-.5px'}}>Historic Sites, </Text><Text>Mysterious Sites</Text>
          </TextDiv2>
          </TextDivs>
          <IconDivs>
          <InlineIcon>{inlineIcons.Heart}</InlineIcon>
          <ImgShare enteredShare={this.enterShareImage} success={this.state.enteredShare} showModal={this.showModal} />
            <Modal show={this.state.show}>
              <EmailTag>Email</EmailTag>
              <CopyTag>Copy link</CopyTag>
            </Modal>
          </IconDivs>
          </TextHeader>
        </div>
      );
  }
}

export default ImageCarouselHeader;