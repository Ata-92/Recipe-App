import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #E1F0DD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;

  & > a {
    border: none;
    outline: none;
    font-size: xx-large;
    font-family: cursive;
    text-decoration: none;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    font-weight: bold;
    letter-spacing: .2vw;

    & span {
      color: aqua;
      font-size: x-large;
      text-transform: uppercase;
      font-family: 'Times New Roman', Times, serif;
      font-style: normal;
      letter-spacing: normal;
    }
  }
`;
