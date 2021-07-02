import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/img/logo.svg';

import Sidebar from '../components/Sidebar';

// import "../styles/header.css"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this['menu'] = [
      // { to: /\/$/, img_src: navHome, img_alt: "Inicio", title: "INICIO" },
      { to: "/map/", icon: ["fas", "map-marked-alt"], img_src: "", img_alt: "Map", title: "Map", visible: true },
      { to: "/item-1/", icon: ["fas", "table"], img_src: "", img_alt: "item 1", title: "item 1", visible: true },
      { to: "/item-2/", icon: ["fas", "address-book"], img_src: "", img_alt: "item 2", title: "item 2", visible: true },
      { to: "/about/", icon: ["fas", "info-circle"], img_src: "", img_alt: "About", title: "About", visible: true },
    ]
    this["defaultMenu"] = { to: "/", icon: ["fas", "map-marked-alt"], img_src: "", img_alt: "No image", title: "Defult page" };
  }

  componentDidUpdate(prevProps) {
    // $('[data-toggle="tooltip"]').tooltip();
    // $('[data-toggle="popover"]').popover();
    // $('[data-toggle="tooltip"]').on("click", () => $('[data-toggle="tooltip"]').tooltip("dispose"));
  }

  render() {
    // console.log("Header component => this", this);

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Sidebar />
            <a className="navbar-brand ms-3" href="/">GIS App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul className="navbar-nav">
                  {this.menu
                    .filter(d => d.visible !== false)
                    .map((d, i, arr) => (
                      <li key={d.to} className="nav-item">
                        <Link to={d.to} className="nav-link">
                          {/* <img src={d.img_src} className="itemNav" alt={d.img_alt} data-toggle="tooltip" title={d.img_alt} /> */}
                          <FontAwesomeIcon icon={d.icon} className="me-1" />
                          <span data-toggle="tooltip" title={d.img_alt} >{d.img_alt}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
