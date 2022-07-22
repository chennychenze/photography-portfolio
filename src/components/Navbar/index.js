import React from "react";
import { animateScroll as Scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
} from "./NavbarElements";
import "./index.css";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    Scroll.scrollToTop();
  };
  return (
    <>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHome}>
          GRAYOUT
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLink
              exact
              to="/"
              className="main-nav"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid black" : "none",
                color: isActive ? "black" : "#696969",
                textDecoration: "none",
              })}
            >
              BOOK I
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/book-two"
              className="main-nav"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid black" : "none",
                color: isActive ? "black" : "#696969",
                textDecoration: "none",
              })}
            >
              BOOK II
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/about"
              className="main-nav"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid black" : "none",
                color: isActive ? "black" : "#696969",
                textDecoration: "none",
              })}
            >
              ABOUT
            </NavLink>
          </NavItem>
        </NavMenu>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      </NavContainer>
    </>
  );
};

export default Navbar;
