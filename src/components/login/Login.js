import { Container, Wrapper, Img, H1, Input, Button } from './LoginStyle';
import meal2 from '../../assets/meal2.svg';
import { useHistory } from 'react-router-dom';

const Login = ({login, setLogin}) => {
  return (
    <Container>
      <Wrapper>
        <Img src={meal2} alt="Cook Icon"/>
        <H1>{String(`<ata/>`)} RECIPE</H1>
      </Wrapper>
    </Container>
  )
}

export default Login;
