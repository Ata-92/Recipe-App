import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: rgba(52, 154, 179, 0.7);
  width: 30%;
  margin: auto;
  padding: 5vh 0.3vw;
  border: 0.2vw solid #fff;
  border-radius: 50%;
`;

export const H1 = styled.h1`
  color: white;
  margin: 1vh 0;
`;

export const Img = styled.img`
  width: 10vw;
`;

export const Input = styled.input`
  color: #fff;
  background-color: rgb(52, 154, 179);
  width: 13vw;
  margin: 1vh 0;
  padding: 2vh 1vw;
  border: none;
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.1vw;
    text-align: left;
    font-family: "Times New Roman", Times, serif;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: rgb(52, 154, 179);
  width: 15vw;
  margin: 1vh 0;
  padding: 2vh 1vw;
  border: none;
  font-weight: bolder;
  font-size: large;
  letter-spacing: 0.2vw;
`;
