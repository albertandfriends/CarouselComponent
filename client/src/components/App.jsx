import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
font-weight: 700;
color: #000;
text-align: left;
position: relative;
left: 20px;
top: -10px;
font-family: Poppins;
margin-block-start: 0.67em;
margin-block-end: 0.67em;
margin-inline-start: 0px;
margin-inline-end: 0px;`;

const Rating = styled.span`display: inline-block;
position: relative;
bottom: 32px;
right: 19px;`;

const Reviews = styled.h4`position: relative;
left: 100px;
bottom: 50px;
display:inline-block;
float:left;`;




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: ''
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
        <Rating> hello </Rating>
        <Reviews>{this.state.reviewCount} </Reviews>
        <Button>Im a button</Button>
      </div>
    );
  }
}

export default App;