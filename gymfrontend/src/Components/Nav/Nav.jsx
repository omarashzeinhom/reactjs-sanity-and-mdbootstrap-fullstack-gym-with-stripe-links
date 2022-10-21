import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBCollapse,
  MDBNavbarBrand,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const navLinks = [ "/about", "/contact", "/membership", "/classes"];
  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/" color="info">
          <Link to="/" className="mx-2 shadow-5-strong text-info">
            OZ GYM      💪
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => setShowNav(!showNav)}>
        <MDBIcon icon="dumbbell" className="me-3 text-info" />
   
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            {navLinks.map((link, index) => (
              <MDBNavbarItem key={link + index}>
                <Link to={link} className="text-info mx-2 shadow-3-strong">
                  {link?.replace("/", " ").toLocaleUpperCase()}
                </Link>
              </MDBNavbarItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Nav;

//REFERENCES
/***
 *
 * 1. [MDB-Colors](https://mdbootstrap.com/docs/react/content-styles/colors/)
 * 2. [Pankaj, 2022] (https://www.digitalocean.com/community/tutorials/java-remove-character-string )
 * 3. [MDB - NavBar](https://mdbootstrap.com/docs/react/navigation/navbar/)
 * 4. [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 */
