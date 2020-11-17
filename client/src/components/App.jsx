import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import heartImg from '../../../images/heart.jpg';
import redHeartImg from '../../../images/redHeart.jpg';
import shareIcon from '../../../images/shareIcon.png';
import shareIconBlack from '../../../images/shareIconBlack.png';
import Carousel from './Carousel.jsx';
import RightArrow from './RightArrow.jsx';
import walkingPNG from '../../../images/walking.png';
import whiteArrowDown from '../../../images/WhiteArrowDown.jpg';
import firstClock from '../../../images/firstClock.png';
import durationClock from '../../../images/durationClock.png';
import mapMarker from '../../../images/mapMarker.png';
import pencil from '../../../images/pencil.png';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
const Title = styled.h1`font-size: 32px;
line-height: 36px;
font-weight: 550;
color: #000;
text-align: left;
position: relative;
left: 10px;
top: 0px;
font-family: Poppins;
margin-block-start: 0.67em;
margin-block-end: 0.67em;
margin-inline-start: 0px;
margin-inline-end: 0px;`;

const Rating = styled.div`
--percent: calc(var(4) / 5 * 100%);
--width: 20%;

display: inline-block;
letter-spacing: 1px;
font-size: var(--dot-size);
font-family: times; // make sure ★ appears correctly
line-height: -5;
position: relative;
left: -182px;
top: -25px;
margin-right: -4px;

&::before {
  content: '●●●●○';
  letter-spacing: -2px;
  padding: 0;
  margin-right: -4px;
  background: linear-gradient(90deg, var(--dot-background) var(--percent), var(--dot-color) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: #00aa6c;
  -webkit-text-stroke: 0px #00aa6c;

}
}
`

const Reviews = styled.p`position: relative;
left: 100px;
bottom: 27px;
display:inline-block;
float:left;
font-family: Poppins;
font-size: 16px;
font-weight: -20px;
margin-left: 5px;
font-size: 14px;
text-decoration-style: dotted;
width: 24%;
&:hover {
  text-decoration: underline;
  font-weight: bold;
}
`;
const TextHeader = styled.div`display: flex; justify-content: left;`;
const SpanText =styled.span`position:relative; left: -180px; top: -20px; font-weight: bold;
color: #474747;
display: inline-block;
font-size: 14px;
line-height: 14px;`;
const H4Text = styled.p`line-height: 14px; display:  flex; justify-content: left; font-size: 14px;
line-height: 18px;
color: #474747;
letter-spacing: .5px; position: relative; left: -177px; top: -36px;
`;
const Text = styled.p`position:relative; left: -173px; top: -36px; display: inline-block;
font-size: 14px;
line-height: 18px;
color: #474747;
letter-spacing: .5px;
width: 40%;
min-height:18px;
&:hover {
  text-decoration: underline;
}`;
const Heart = styled.img`
 15px; height: 15px; display: flex; justify-content: flex-start;position: relative;
 top: -30px; right: -270px;
 opacity: 1; font-family: Poppins;
 cursor: pointer;
`;

const IconShare = styled.img`
width: 20px; height: 20px; display: flex; justify-content: flex-start;position: relative;
 top: -12px; right: -64px;
 opacity: 1; font-family: Poppins;
 background-size: cover;
 cursor: pointer;
`;

 const Text2 = styled.p` display: flex;
 justify-content: flex-start;
font-size: 14px;
line-height: 18px;
font-weight:300;
color: #474747;
letter-spacing: .5px;
position: relative;
left: -493px;
top: -10px;
&:hover {
  text-decoration: underline;
}`
;
const CarouselFooter = styled.div`display: flex; flex-direction: column; align-items: center; position: relative; top: -30px; left: -15px;`;

const CarouselFooterText = styled.h1`font-family: Poppins; font-size: 16px; color: #2c2c2c; position: relative; top: -15px;`;
const CarouselFooterTextTwo = styled.h4`font-family: arial; font-size: 12px; color: #2c2c2c; position: relative; top: -38px; right: -55px; font-weight: lighter;`;
const CarouselFooterImage = styled.img`height: 22px; width: 22px; position: relative; left: -100px; top: -90px;`;

const CarouselFooterButton = styled.button`border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 14px;
margin: 4px 2px;
cursor: pointer;
background-color: black;
font-style: normal;
font-stretch: normal;
letter-spacing: normal;
font-weight: 700;
width:800px;
position: relative;
left: 15px;
top: -70px;
transition-duration: 0.3s;
&:hover {
  background-color: #2c2c2c;
}
`;
const WhiteArrowDown = styled.img`height:20px; width: 18px; position: absolute; top: 55px; right: 10px; `

const Divider = styled.hr`height: 1px; background-color: #ccc;
border: none; position:relative; bottom: 100px;
`;
const OverviewDiv = styled.div`display:flex; flex-direction:column;
height: 150px;
`;
const OverviewText = styled.h4`font-size:16px; font-family: poppins;
color: #474747; font-weight:550;
position: relative;
top: -110px;
right: -20px;
`;
const OverviewPar = styled.p`font-size:14px; font-family: poppins;
color: #474747; font-weight:250;
position: relative;
top: -135px;
right: -20px;
`
const OverviewMoreSpan = styled.span`text-decoration: underline;position: relative;
top: -167px;
right: -632px;font-size:14px; font-family: poppins;
color: #474747; font-weight:250;
cursor: pointer;
border-bottom: .2px dotted #e0e0e0;
border-bottom-color: rgb(224, 224, 224);`;

const OverviewFirstClock = styled.img`height:20px; width: 20px; position: relative;
top: -155px;
right: -20px;`

const OverviewHoursText = styled.p`color: #f73; font-weight: 700; line-height:20px;
font-size: 14px;
font-family: poppins;
position: relative;
top: -189px;
right: -45px;`;

const OverviewHoursText2 = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-family: poppins;
position: relative;
top: -217px;
right: -45px;`;

const OverviewHoursAnchor = styled.a`color: #069; line-height:20px;
font-size: 14px;
font-family: poppins;
position: relative;
top: -230px;
right: -45px;
cursor: pointer;
`;

const OverviewDurationClock = styled.img`height:22px; width: 22px; position: relative;
top: -230px;
right: -19px;`

const OverviewDurationText = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-weight: 600;
font-family: poppins;
position: relative;
top: -265px;
right: -45px;`;

const OverviewHoursText3 = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-family: poppins;
position: relative;
top: -312px;
right: -170px;`;

const OverviewAddress = styled.img`height:20px; width: 20px; position: relative;
top: -315px;
right: -20px;`

const OverviewAddressText = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-weight: 600;
font-family: poppins;
position: relative;
top: -350px;
right: -45px;`;

const OverviewAddressText2 = styled.p`color: #474747; line-height:20px;
font-size: 14px;
font-family: poppins;
position: relative;
top: -397px;
right: -105px;`;

const OverviewMapSpan = styled.span`text-decoration: underline;position: relative;
top: -431px;
right: -482px;font-size:14px; font-family: poppins;
color: #474747; font-weight:250;
cursor: pointer;
border-bottom: .2px dotted #e0e0e0;
border-bottom-color: rgb(224, 224, 224);`;


const OverviewImproveSpan = styled.span` position: relative;
top: -431px;
right: -45px;font-size:14px; font-family: poppins;
color: #474747; font-weight:250;
cursor: pointer;
border-bottom: .2px dotted #e0e0e0;
border-bottom-color: rgb(224, 224, 224);`;

const OverviewPencil = styled.img`height:20px; width: 20px; position: relative;
top: -415px;
right: -20px;`



 const ImgHeart = ({ success, entered }) => (
   <Heart onMouseEnter={() => entered()} onMouseLeave={() => entered()} src={success ? heartImg : redHeartImg} />
 );

 const ImgShare = ({ success, enteredShare }) => (
  <IconShare onMouseEnter={() => enteredShare()} onMouseLeave={() => enteredShare()} src={success ? shareIcon : shareIconBlack} />
);




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: '',
      entered: true,
      enteredShare: true
    }
    this.enterImage = this.enterImage.bind(this);
    this.enterShareImage = this.enterShareImage.bind(this);
  }
  enterImage() {
    if(this.state.entered === false) {
    this.setState({
      entered: true
    })
  } else {
    this.setState({
      entered: false
    })
  }
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
  componentDidMount() {
    axios.get('/api/trips/1/reviews').then(
      (response) => {
        console.log('response', response);
        this.setState({
         reviewCount: response.data[0].reviewCount.toLocaleString('en')
        })
      }
    )
  }
  render() {
    return (
      <div className="component">
        <Title>Winchester Mystery House </Title>
        <Rating style ={{rating: 4}} > </Rating>
        <Reviews>{this.state.reviewCount} Reviews </Reviews>
        <TextHeader>
        <SpanText> #12 </SpanText> <H4Text>of 139</H4Text><Text> things to do in San Jose</Text>
        <ImgHeart success = {this.state.entered} entered = {this.enterImage}/>
        <Text2>Historic Sites,  </Text2> <Text2>  Mysterious Sites</Text2>
        <ImgShare enteredShare = {this.enterShareImage} success= {this.state.enteredShare}/>
        </TextHeader>
        <Carousel/>
        <CarouselFooter>
        <CarouselFooterText> 2 Tours & Experiences</CarouselFooterText>
      <CarouselFooterTextTwo> Cultural tours, Walking Tours, Biking Tours & more </CarouselFooterTextTwo>
      <CarouselFooterImage src={walkingPNG}>
      </CarouselFooterImage>
      <CarouselFooterButton>
        See available tour options
      </CarouselFooterButton>
      <WhiteArrowDown src={whiteArrowDown}/>
      </CarouselFooter>
      <Divider/>
      <OverviewDiv>
      <OverviewText>
        Overview
      </OverviewText>
      <OverviewPar>
      The Winchester Mystery House is the beautiful but bizarre mansion of Sarah Winchester, heiress of the Winchester Repeating Arms fortune. Construction began in 1884, and didn't stop for 38 years. Haunted by the spirits of Winchester rifle victims,..
      </OverviewPar>
      <OverviewMoreSpan>
        more
      </OverviewMoreSpan>
      <OverviewFirstClock src={firstClock}/>
      <OverviewHoursText>
       Closed today
      </OverviewHoursText>
      <OverviewHoursText2>
        Hours Today: Closed
      </OverviewHoursText2>
      <OverviewHoursAnchor>
        See all hours
      </OverviewHoursAnchor>
      <OverviewDurationClock src={durationClock}/>
      <OverviewDurationText>
      Suggested Duration:
      </OverviewDurationText>
      <OverviewHoursText3>
        2-3 hours
      </OverviewHoursText3>
      <OverviewAddress src={mapMarker}/>
      <OverviewAddressText>
        Address:
      </OverviewAddressText>
      <OverviewAddressText2>
      525 S Winchester Blvd North San Jose, San Jose, CA 95128-2588
      </OverviewAddressText2>
      <OverviewMapSpan>
        Map
      </OverviewMapSpan>
      <OverviewPencil src={pencil}/>
      <OverviewImproveSpan>
       Improve this listing
      </OverviewImproveSpan>
      </OverviewDiv>
      </div>
    );
  }
}

export default App;