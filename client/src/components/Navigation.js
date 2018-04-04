import React, { Component } from 'react';
import logo from '../images/here_logo.png';
import '../styles/Navbar.css';

const Navbar = require('react-bootstrap/lib/Navbar');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const NavDropdown = require('react-bootstrap/lib/NavDropdown');
const MenuItem = require('react-bootstrap/lib/MenuItem');

class Navigation extends Component {
  render() {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/">
              Dashboard
            </NavItem>
            <NavDropdown eventKey={3} title="Manage" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Campaigns</MenuItem>
              <MenuItem eventKey={3.2}>Positions</MenuItem>
              <MenuItem eventKey={3.3} href="/applicants">Applicants</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;