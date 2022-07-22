import styled from "styled-components";

export const Container = styled.div`
  background: white;
`;

export const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  margin-top: 4rem;
  @media screen and (max-width: 550px) {
    display: none;
  }
  @media screen and (min-width: 800px) {
    padding: 0 48px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 72px;
  }
  @media screen and (min-width: 1600px) {
    padding: 0 96px;
  }
`;

export const ContainerMobile = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 550px) {
    display: none;
  }
  @media screen and (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Item = styled.div`
  @media screen and (max-width: 550px) {
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 390px;
  filter: grayscale(100%);
  :hover {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
  @media screen and (max-width: 550px) {
    width: 320px;
  }
`;
