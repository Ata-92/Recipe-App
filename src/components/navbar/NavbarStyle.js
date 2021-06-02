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

export const Nav = styled.nav`
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & a {
    color: #00ADB5;
    font-weight: bolder;
    font-size: x-large;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    font-family: 'Times New Roman', Times, serif;

    & span {
      font-family: 'Times New Roman', Times, serif;
      font-size: xx-large;
    }

    &:hover {
      color: aqua;
      font-weight: bold;
      transition: all 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 768px) {
    ${props =>
      props.hamburger
        ? css`
            position: absolute;
            top: 8vh;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            background-color: aliceblue;
            width: 100%;
            justify-content: center;
            align-items: center;
          `
        : css`
            display: none;
          `}

    & a {
      display: block;
      margin-bottom: 3vh;
    }
  }
`;
