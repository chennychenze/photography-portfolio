import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarContainer, CloseBtn, SidebarMenu } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <CloseBtn onClick={toggle} />
      <SidebarMenu>
        <NavLink
          to="/"
          className="main-nav"
          style={({ isActive }) => ({
            color: isActive ? "black" : "#696969",
            fontWeight: isActive ? "600" : "400",
            textDecoration: "none",
          })}
        >
          BOOK I
        </NavLink>
        <NavLink
          to="/book-two"
          className="main-nav"
          style={({ isActive }) => ({
            color: isActive ? "black" : "#696969",
            fontWeight: isActive ? "600" : "400",
            textDecoration: "none",
          })}
        >
          BOOK II
        </NavLink>
        <NavLink
          to="/about"
          className="main-nav"
          style={({ isActive }) => ({
            color: isActive ? "black" : "#696969",
            fontWeight: isActive ? "600" : "400",
            textDecoration: "none",
          })}
        >
          ABOUT
        </NavLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
