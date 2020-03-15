import React, { useState } from 'react';
import {
Navbar, NavbarBrand, Nav, NavbarText, NavLink
} from 'reactstrap';

const Navi = (props) => {
  return (
    <div>
      <Navbar className="navbarcigim">
        <NavbarBrand>Nortwind App!</NavbarBrand>
        <Nav className="navLink" navbar>
          <NavLink>Home</NavLink>
          <NavLink>About </NavLink>
          <NavLink>Contact </NavLink>
        </Nav>
        <NavbarText className="navText">Cart - {props.cart.length}</NavbarText>
      </Navbar>
    </div>
  );
}

export default Navi;