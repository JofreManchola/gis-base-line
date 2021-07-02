import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from "../config.json";

// import "../styles/footer.css"

function Footer() {
  const currentYear = new Date().getFullYear();
  const sufix = (+config.since === +currentYear) ? "" : `${config.since} - `;
  const since = `${sufix}${currentYear}`;
  const iconStyle = {};
  // const Separator = (props) => <span> - </span>;
  const Separator = (props) => <FontAwesomeIcon icon="genderless" className="mx-3" style={iconStyle} />;
  // const Separator = (props) => <FontAwesomeIcon icon="minus" className="text-danger mx-3" style={iconStyle} />;
  return (
    <footer className="row bg-dark text-light">

      <div className="col-12 col-md-7 text-center text-md-left">
        <span className="">
          <a href="https://google.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Help</a>
          <Separator />
          <Link to={"/item-2"} className="btn btn-sm btn-dark">item 2</Link>
          <Separator />
          <a href="https://google.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">other link</a>
        </span>
      </div>
      <div className="col-12 col-md-5 text-center text-md-right">
        <small className="">© {since}</small>
      </div>
    </footer>
  );
}


export default Footer;