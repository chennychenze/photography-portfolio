import React from "react";
import {
  Container,
  ImgWarp,
  Img,
  TextWrap,
  InnerTextWrap,
  CenterMobile,
  BtnContainer,
} from "./AboutElements";

const About = () => {
  return (
    <Container>
      <ImgWarp>
        <Img src="/images/about.jpg" />
      </ImgWarp>
      <TextWrap>
        <InnerTextWrap>
          <p>
            Hello there, and welcome to Chen's photography portfolio GRAYOUT!
            Click or hover over the images to reveal their vibrant colors and
            the emotions within each frame. Join me on this immersive journey to
            explore the stories behind captivating photographs. Thank you for
            visiting, and enjoy the interactive experience!
          </p>
          <CenterMobile>
            <p>
              <strong>chenny.chenze@gmail.com</strong>
            </p>
          </CenterMobile>
        </InnerTextWrap>
        <BtnContainer>
          <div>
            <p
              style={{
                fontSize: "1rem",
                paddingTop: "1rem",
                color: "#808080",
              }}
            >
              &copy; 2023 GRAYOUT. All rights reserved.
            </p>
          </div>
        </BtnContainer>
      </TextWrap>
    </Container>
  );
};

export default About;
