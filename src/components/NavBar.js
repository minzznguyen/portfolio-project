import React from 'react'
import logo from "../melon_logo.jpg"
// React font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
          <a className="navbar-brand" href="#"><img className="logo" src={logo}/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} color="#fff"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">How it works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
              </li>
              
            </ul>
          </div>
          </div>
        </nav>
    )
}

export default NavBar