import React from "react";
import Carousel from "react-elastic-carousel";
import {
  Container,
  ContainerInner,
  ContainerMobile,
  Img,
  Item,
} from "./BookoneElements";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1600, itemsToShow: 4 },
];

const BookOne = () => {
  return (
    <Container>
      <ContainerInner>
        <Carousel breakPoints={breakPoints}>
          <Img src="/images/1.jpg" />
          <Img src="/images/2.jpg" />
          <Img src="/images/3.jpg" />
          <Img src="/images/4.jpg" />
          <Img src="/images/5.jpg" />
          <Img src="/images/6.jpg" />
        </Carousel>
      </ContainerInner>
      <ContainerMobile>
        <Item>
          <Img src="/images/1.jpg" />
        </Item>
        <Item>
          <Img src="/images/2.jpg" />
        </Item>
        <Item>
          <Img src="/images/3.jpg" />
        </Item>
        <Item>
          <Img src="/images/4.jpg" />
        </Item>
        <Item>
          <Img src="/images/5.jpg" />
        </Item>
        <Item>
          <Img src="/images/6.jpg" />
        </Item>
      </ContainerMobile>
    </Container>
  );
};

export default BookOne;
