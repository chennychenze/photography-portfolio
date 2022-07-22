import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 10;
  top: 0;
  padding: 0 24px;
  @media screen and (max-width: 550px) {
    background: #f8f8f8;
  }
  @media screen and (min-width: 800px) {
    height: 100px;
    padding: 0 48px;
  }
  @media screen and (min-width: 1200px) {
    height: 120px;
    padding: 0 72px;
  }
  @media screen and (min-width: 1600px) {
    height: 140px;
    padding: 0 96px;
  }
`;

export const NavLogo = styled(LinkR)`
  font-size: 2rem;
  color: black;
  text-decoration: none;
  @media screen and (min-width: 800px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 1600px) {
    font-size: 3.5rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding-left: 24px;
  list-style: none;
  :hover {
    color: #696969;
  }
  @media screen and (min-width: 800px) {
    padding-left: 48px;
    font-size: 1.25rem;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 72px;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1600px) {
    padding-left: 96px;
    font-size: 1.75rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 550px) {
    display: block;
    font-size: 2rem;
    padding-top: 5px;
    cursor: pointer;
  }
`;
