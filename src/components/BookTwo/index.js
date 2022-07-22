import React from "react";
import Carousel from "react-elastic-carousel";
import {
  Container,
  ContainerInner,
  ContainerMobile,
  Img,
  Item,
} from "./BooktwoElements";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1600, itemsToShow: 4 },
];

const BookTwo = () => {
  return (
    <Container>
      <ContainerInner>
        <Carousel breakPoints={breakPoints}>
          <Img src="/images/11.jpg" />
          <Img src="/images/22.jpg" />
          <Img src="/images/33.jpg" />
          <Img src="/images/44.jpg" />
          <Img src="/images/55.jpg" />
        </Carousel>
      </ContainerInner>
      <ContainerMobile>
        <Item>
          <Img src="/images/11.jpg" />
        </Item>
        <Item>
          <Img src="/images/22.jpg" />
        </Item>
        <Item>
          <Img src="/images/33.jpg" />
        </Item>
        <Item>
          <Img src="/images/44.jpg" />
        </Item>
        <Item>
          <Img src="/images/55.jpg" />
        </Item>
      </ContainerMobile>
    </Container>
  );
};

export default BookTwo;
