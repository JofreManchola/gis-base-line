import React, { Component } from 'react';
// import "../styles/comingSoon.css"

import MasterPage3Columns from '../masterpages/MasterPage';

class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <MasterPage3Columns>
        <h1 className="text-primary">Coming soon...</h1>

        <div className="row">
          <div className="col-12">

            <button type="button" className="btn m-1 btn-primary">Primary</button>
            <button type="button" className="btn m-1 btn-secondary">Secondary</button>
            <button type="button" className="btn m-1 btn-success">Success</button>
            <button type="button" className="btn m-1 btn-danger">Danger</button>
            <button type="button" className="btn m-1 btn-warning">Warning</button>
            <button type="button" className="btn m-1 btn-info">Info</button>
            <button type="button" className="btn m-1 btn-light">Light</button>
            <button type="button" className="btn m-1 btn-dark">Dark</button>

            <button type="button" className="btn m-1 btn-link">Link</button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">

            <button type="button" className="btn m-1 btn-outline-primary">Primary</button>
            <button type="button" className="btn m-1 btn-outline-secondary">Secondary</button>
            <button type="button" className="btn m-1 btn-outline-success">Success</button>
            <button type="button" className="btn m-1 btn-outline-danger">Danger</button>
            <button type="button" className="btn m-1 btn-outline-warning">Warning</button>
            <button type="button" className="btn m-1 btn-outline-info">Info</button>
            <button type="button" className="btn m-1 btn-outline-light">Light</button>
            <button type="button" className="btn m-1 btn-outline-dark">Dark</button>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">

            <span className="badge m-1 rounded-pill bg-primary">Primary</span>
            <span className="badge m-1 rounded-pill bg-secondary">Secondary</span>
            <span className="badge m-1 rounded-pill bg-success">Success</span>
            <span className="badge m-1 rounded-pill bg-danger">Danger</span>
            <span className="badge m-1 rounded-pill bg-warning text-dark">Warning</span>
            <span className="badge m-1 rounded-pill bg-info text-dark">Info</span>
            <span className="badge m-1 rounded-pill bg-light text-dark">Light</span>
            <span className="badge m-1 rounded-pill bg-dark">Dark</span>
          </div>
        </div>

      </MasterPage3Columns>
    );
  }
}

export default ComingSoon;
