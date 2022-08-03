import React from "react";
import {
  Container,
  ImgWarp,
  Img,
  TextWrap,
  InnerTextWrap,
  CenterMobile,
  BtnContainer,
  Button,
} from "./AboutElements";

const About = () => {
  return (
    <Container>
      <ImgWarp>
        <Img src="/images/about.jpg" />
      </ImgWarp>
      <TextWrap>
        <InnerTextWrap>
          <p>Hi! I'm Chen, a programmer and photographer.</p>
          <br></br>
          <p>
            I am a junior studying <strong>Applied Data Analytics</strong> and{" "}
            <strong>Computer Science</strong> at Syracuse University.
          </p>
          <br></br>
          <p>
            I designed and developed this photography portfolio website{" "}
            <strong>GRAYOUT</strong> to showcase my creative work. You can{" "}
            <strong>click </strong> (for mobile devices) or{" "}
            <strong>hover </strong> on each photo to view its light and color.
          </p>
          <CenterMobile>
            <p>
              <strong>contact email: cchen11@syr.edu</strong>
            </p>
          </CenterMobile>
        </InnerTextWrap>
        <BtnContainer>
          <Button
            href="https://github.com/cchenze/photography_portfolio"
            target="_blank"
          >
            View source code for GRAYOUT
          </Button>
          <div>
            <p
              style={{
                fontSize: "1rem",
                paddingTop: "0.4rem",
                color: "#808080",
              }}
            >
              &copy; 2022 GRAYOUT. All rights reserved.
            </p>
          </div>
        </BtnContainer>
      </TextWrap>
    </Container>
  );
};

export default About;
