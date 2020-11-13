import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: 0
    }
  }
  componentDidMount() {
    axios.get('/api/trips/1/reviews').then(
      (response) => {
        console.log('response', response);
        this.setState({
         reviewCount: response.data[0].reviewCount
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h1>{this.state.reviewCount}</h1>
      </div>
    );
  }
}

export default App;