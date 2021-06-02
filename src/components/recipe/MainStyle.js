import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.cards > 0 ? "#E1F0DD" : "#00adb5"};
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 1vw;
  grid-template-columns: repeat(5, 1fr);
  padding: 2vh 1vw;
`;

export const Card = styled.div`
  background-color: #00adb5;
  box-shadow: 0.4vw 0.4vw 0.1vw 0.01vw gray;
  display: flex;
  flex-direction: column;
  padding: 1vh 0;
`;

export const H5 = styled.h5`
  font-size: larger;
  margin-bottom: 1vh;
`;

export const Img = styled.img`
  width: 10vw;
  margin: auto;
`

export const Button = styled.button`
  background-color: #e1f0dd;
  border: none;
  border-radius: 0.3vw;
  outline: none;
  width: 25%;
  margin: 1vh auto;
  padding: 1vh 0.1vw;
  cursor: pointer;
`;
