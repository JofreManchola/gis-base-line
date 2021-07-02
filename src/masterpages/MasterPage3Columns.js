import React, { Component } from 'react';
import MasterPage from './MasterPage';
// import "../styles/masterPage3Columns.css"

class MasterPage3Columns extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <MasterPage>
        <div className="col-sm">
          Left column
        </div>
        <div className="col-12 col-sm-6 col-md-8">
          Middle column
          {this.props.children}
        </div>
        <div className="col-sm">
          Right column
        </div>
      </MasterPage>
    );
  }
}

export default MasterPage3Columns;
