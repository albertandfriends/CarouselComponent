import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import heartImg from '../../../images/heart.jpg';
import redHeartImg from '../../../images/redHeart.jpg';
import shareIcon from '../../../images/shareIcon.png';
import shareIconBlack from '../../../images/shareIconBlack.png';

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
const SpanText =styled.span`position:relative; left: -180px; top: -20px; font-weight: bold; display: inline-block;
font-size: 14px;
line-height: 14px;`;
const H4Text = styled.p`line-height: 14px; display:  flex; justify-content: left; font-size: 14px;
line-height: 18px;
color: #474747;
letter-spacing: .5px; position: relative; left: -177px; top: -36px;`;
const Text = styled.p`position:relative; left: -173px; top: -36px; display: inline-block;
font-size: 14px;
line-height: 18px;
color: #474747;
letter-spacing: .5px;
width: 40%;
&:hover {
  text-decoration: underline;
  font-weight: bold;
}`;
const Heart = styled.img`
 15px; height: 15px; display: flex; justify-content: flex-start;position: relative;
 top: -30px; right: -270px;
 opacity: 1; font-family: Poppins;
`;

const IconShare = styled.img`
500px; height: 500px; display: flex; justify-content: flex-start;position: relative;
 top: -10px; right: -270px;
 opacity: 1; font-family: Poppins;
 background-size: cover;
`;

 const Text2 = styled.p` display: flex;
 justify-content: flex-start;
font-size: 14px;
line-height: 18px;
color: #474747;
letter-spacing: .5px;
position: relative;
left: -493px;
top: -10px;
&:hover {
  text-decoration: underline;
  font-weight: bold;
}`
;

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
        <h5>Hello World</h5>
        {/* <ImgShare enteredShare = {this.enterShareImage} success= {this.state.enteredShare}/> */}
        </TextHeader>
      </div>
    );
  }
}

export default App;