import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;

  @media screen and (max-width: 800px) {
    grid-template-columns: 320px;
    gap: 10px;
    padding-top: 2rem;
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: 360px 360px;
    gap: 40px;
    padding-top: 3rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 400px 400px;
    gap: 70px;
  }
  @media screen and (min-width: 1600px) {
    grid-template-columns: 440px 440px;
    gap: 100px;
  }
`;

export const ImgWarp = styled.div`
  background: white;
`;

export const Img = styled.img`
  width: 320px;
  border-radius: 50%;
  filter: grayscale(100%);
  :hover {
    filter: grayscale(0%);
  }
  @media screen and (min-width: 800px) {
    width: 360px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
  }
  @media screen and (min-width: 1600px) {
    width: 440px;
  }
`;

export const TextWrap = styled.div`
  background: white;
`;

export const InnerTextWrap = styled.div`
  text-align: justify;
  line-height: 1.5;
  font-size: 1.2rem;
  @media screen and (min-width: 800px) {
    font-size: 1.3rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1600px) {
    font-size: 1.5rem;
  }
`;

export const CenterMobile = styled.div`
  margin: 10px;
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  margin: 10px;
`;

// export const Button = styled.a`
//   text-decoration: none;
//   color: black;
//   font-size: 1.2rem;
//   &:hover {
//     cursor: pointer;
//     opacity: 100%;
//     font-weight: bold;
//     transition: 0.3s;
//   }
//   @media screen and (min-width: 800px) {
//     font-size: 1.3rem;
//   }
//   @media screen and (min-width: 1200px) {
//     font-size: 1.4rem;
//   }
//   @media screen and (min-width: 1600px) {
//     font-size: 1.5rem;
//   }
// `;
