import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Footer from "../components/Footer";
import logo from '../assets/img/logo.svg';

// import "../styles/masterPagePrint.css"

class MasterPagePrint extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidUpdate() {  }

  render() {
    return (
      <React.Fragment>
        <PrintableHeader />
        <div id="workspace" className="row">
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const PrintableHeader = (props) => <div className="row d-flex align-items-center header border-bottom" style={{ backgroundColor: "white" }}>
  <div className="col-sm d-flex justify-content-center justify-content-sm-start">
    <Link to="/">
      <img src={logo} className="logo" alt="logo" />
    </Link>
  </div>
  <div className="col-sm mb-2 mb-sm-0">
    <ul className="nav d-flex justify-content-center justify-content-sm-end">
      <button id="imprimir" type="button" className="btn btn-sm btn-outline-primary ml-3 d-print-none"
        onClick={() => window.print()}>
        <FontAwesomeIcon icon={["fa", "print"]} className="mr-2" />
        Imprimir
      </button>
    </ul>
  </div>
</div>;

export default MasterPagePrint;
