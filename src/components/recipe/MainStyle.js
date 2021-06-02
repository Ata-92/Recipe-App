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
