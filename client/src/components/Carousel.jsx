import React from 'react';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slide from './Slide.jsx';
import leftArrow from '../../../images/whiteArrowLeft.png';
import rightArrow from '../../../images/whiteArrowRight.png';
import PhotosModal from './PhotosModal.jsx';
import axios from 'axios';
const imgUrls = [
 "https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/orbs-of-light-floating.jpg",
 "https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/smokey-shapes-not-visible.jpg",
 "https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/the-winchester-mystery.jpg",
 "https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/WinchesterHouse_PChang-4330.0.1484336386.jpg"
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      imageUrls: ["https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/orbs-of-light-floating.jpg"]
    };
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
  }
  componentDidMount() {
    axios.get('/api/trips/CarouselComponent/1/photos').then((response) => {
      console.log('response is', response.data)
      console.log('response also is,', response.data[0].urlLink);
      response.data.splice(8,1);
      response.data.splice(4,1);
      this.setState({
        imageUrls: response.data
      })
      console.log('YES',this.state.imageUrls);
    });
  }
  goToPrevSlide() {
    const lastIndex = this.state.imageUrls.length - 1;
    const {activeIndex} = this.state;
    const shouldResetIndex = activeIndex === 0;
    const index =  shouldResetIndex ? lastIndex : activeIndex - 1;

    this.setState({
      activeIndex: index
    });
  }
  goToNextSlide() {
    const lastIndex = this.state.imageUrls.length - 1;
    const { activeIndex } = this.state;
    const shouldResetIndex = activeIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : activeIndex + 1;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <LeftArrow goToPrevSlide = {this.goToPrevSlide}/>

        <Slide url={this.state.imageUrls[this.state.activeIndex].urlLink}/>

        <RightArrow goToNextSlide = {this.goToNextSlide}/>
      </div>
    );
  }
}

export default Carousel;
