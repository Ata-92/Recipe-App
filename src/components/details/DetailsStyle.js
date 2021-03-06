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

export const Wrapper = styled.div`
  border: 0.2vw solid #fff;
  border-radius: 0.vw;
  margin: 0 3vw;
  padding: 1vw 1vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LeftInfo = styled.div`
  float: left;
  width: 40%;
  box-sizing: border-box;
  padding-right: 7vw;
`;

export const P = styled.p`
  margin: 1vh 0;
  text-align: right;
`;

export const RecipeImage = styled.img`
  width: 20%;
  box-shadow: 0 0 0 .5vw #00adb5, 0 0 0 .6vw white;
  border-radius: .1vw;
  margin: 2vh 5vw;
`;

export const RightInfo = styled.div`
  float: right;
  width: 40%;
`;

export const Ol = styled.ol``;

export const Li = styled.li`
  margin: 1vh 0;
`;
