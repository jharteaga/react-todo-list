import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../img/logo.png';

const NavBar = (props) => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="33"
          height="33"
          className="d-inline-block align-top logo"
        />{' '}
        To-Do List
      </Navbar.Brand>
    </Navbar>
  </>
);

export default NavBar;
