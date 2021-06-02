import styled from 'styled-components';

export const Container = styled.div`
  background-color: #00ADB5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Wrapper = styled.div`
  border: .1vw solid #fff;
  border-radius: .3vw;
  padding: 1vh 1vw;
`

export const Img = styled.img`
  width: 30vw;
`

export const H2 = styled.h2`
  & span {
    color: white;

    & span {
      font-size: xx-large;
    }
  }
`;

export const H3 = styled.h3`
  text-align: right;
  margin: 2vh 1vw;
`

export const H4 = styled.h4`
  text-align: right;
  margin: 2vh 1vw;

  & span {
    color: #fff;
    text-decoration: underline;
  }
`
