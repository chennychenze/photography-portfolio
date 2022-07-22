import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  background: white;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseBtn = styled(FaTimes)`
  color: black;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 2rem;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 120px);
  text-align: center;
  @media screen and (min-width: 800px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1600px) {
    font-size: 1.75rem;
  }
`;
