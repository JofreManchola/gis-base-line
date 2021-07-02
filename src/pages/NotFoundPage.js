import React, { Component } from 'react';
// import "../styles/notFoundPage.css"

import MasterPage3Columns from '../masterpages/MasterPage3Columns';

class NotFoundPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <MasterPage3Columns>
          <h1>Página no encontrada</h1>
        </MasterPage3Columns>
      </div>
    );
  }
}

export default NotFoundPage;
