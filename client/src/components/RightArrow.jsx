import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
var rightArrow = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/images/whiteArrowRight.png';

const Arrow = styled.img`
 width: 20px; height: 20px; position: relative; top: -180.6px; right: -88%; z-index: 2;
 cursor: pointer; background-color: rgba(0, 0, 0, 0.5); padding: 15px;
`;
const ArrowDiv = styled.div`height:10px;`


class RightArrow extends React.Component {
  render() {
    return(
      <ArrowDiv onClick={this.props.goToNextSlide}>
      <Arrow src={rightArrow} />
      </ArrowDiv>
    )
  }
}

export default RightArrow;