import React, { Component } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import config from "../config.json";
// import "../styles/masterPage.css"

class MasterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <React.Fragment>
        {/* {config.test && false ? <div className="row bg-dark text-white text-center font-weight-bold">
          <div className="col-12 d-block d-sm-none d-md-none d-lg-none d-xl-none">xs</div>
          <div className="col-12 d-none d-sm-block d-md-none d-lg-none d-xl-none">sm</div>
          <div className="col-12 d-none d-sm-none d-md-block d-lg-none d-xl-none">md</div>
          <div className="col-12 d-none d-sm-none d-md-none d-lg-block d-xl-none">lg</div>
          <div className="col-12 d-none d-sm-none d-md-none d-lg-none d-xl-block">xl</div>
        </div> : ""} */}
        <Header />
        <div id="workspace" className="row h-100">
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default MasterPage;
