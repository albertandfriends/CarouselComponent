import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import rightArrow from '../../../images/whiteArrowRight.png';

const Arrow = styled.img`
 width: 20px; height: 20px; position: relative; top: -207.39px; right: -85%; z-index: 2;
 cursor: pointer; background-color: rgba(0, 0, 0, 0.5); padding: 15px;
`;


class RightArrow extends React.Component {
  render() {
    return(
      <div className='frontArrow' onClick={this.props.goToNextSlide}>
      <Arrow src={rightArrow} />
      </div>
    )
  }
}

export default RightArrow;