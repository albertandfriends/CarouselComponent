import React from 'react';
import styled from 'styled-components';
import leftArrow from '../../../images/whiteArrowLeft.png';

const Arrow = styled.img`
 width: 20px;
 height: 20px;
 position: relative;
 bottom: -140px;
 right: -6%;
 z-index: 2;
 cursor: pointer;
 background-color: rgba(0, 0, 0, 0.5);
`;


class LeftArrow extends React.Component {
  render() {
    return(
      <div className='backArrow' onClick={this.props.goToPrevSlide}>
      <Arrow src={leftArrow} />
      </div>
    )
  }
}

export default LeftArrow;