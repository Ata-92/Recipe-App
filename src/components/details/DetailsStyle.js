import styled from "styled-components";

export const Container = styled.div`
  background-color: #00adb5;
  height: 110vh;
  position: relative;
`;

export const Heading = styled.div`
  & Img {
    float: right;
    width: 15vw;
    margin: 6vh 6vw;
  }

  &::after {
    content: "";
    clear: both;
    display: block;
  }
`;

export const H2 = styled.h2`
  float: left;
  margin: 6vh 6vw;
  font-size: 3vw;
`;

export const Img = styled.img``;
