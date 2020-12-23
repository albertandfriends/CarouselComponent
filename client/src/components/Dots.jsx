import React from 'react'
import styled from 'styled-components'

var DotSpan = styled.span`padding: 5px; margin-right: 5px; border-radius: 50%; background-color: rgba(214, 214, 214, 0.8); z-index: 998; position: relative; top: 210px; left: -200px; border: 1px solid #474747; text-align: center; `;
var NewDotSpan = styled.span`padding: 5px; margin-right: 5px; border-radius: 50%; background-color: white; z-index: 998; position: relative; top: 210px; left: -200px; border: 1px solid #474747; text-align: center;`;

var NewestDot = styled.div`
  position: absolute;
  left: 210px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = ({ active }) =>  {
  if (active) {
    return <NewDotSpan/>
  }
  else {
    return <DotSpan/>
  }
};

var newActiveIndex = 0;

const Dots = ({ DotsArray, activeIndex}) => {
  // LOGIC FOR 5 page pagination
  if(activeIndex % 5 === 0) {
    activeIndex = newActiveIndex;
  }
  if(activeIndex > 5) {
    newActiveIndex += 1;
    activeIndex = newActiveIndex;
    if(newActiveIndex >= 4) {
      newActiveIndex = 0;
    }
  }
  return (
  <NewestDot>
  {DotsArray.map((slide, i) => (
    <Dot key={slide} active={activeIndex === i} />
  ))}
  </NewestDot>
  );

}



export default Dots;