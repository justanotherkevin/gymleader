import React, { Component } from 'react';
import Gymmap from '../components/homeMap';

class Home extends Component {
  render() {
    const hello = () => {
      return <h2>this is some random constant</h2>
    }
    return (
      <div>
          <h1>This is the Home</h1>
          <Gymmap/>
          {hello()}
      </div>
    );
  }
} 
export default Home;
