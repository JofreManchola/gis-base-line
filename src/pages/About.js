import React, { Component } from 'react';
// import "../styles/about.css"

import MasterPage3Columns from '../masterpages/MasterPage3Columns';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <MasterPage3Columns>
        <h1>About this web...</h1>
      </MasterPage3Columns>
    );
  }
}

export default About;
