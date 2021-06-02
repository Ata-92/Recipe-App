import { Container, Wrapper, Img, H1, Input, Button } from './LoginStyle';
import meal2 from '../../assets/meal2.svg';
import { useHistory } from 'react-router-dom';

const Login = ({login, setLogin}) => {
  return (
    <Container>
      <Wrapper>
        <Img src={meal2} alt="Cook Icon"/>
        <H1>{String(`<ata/>`)} RECIPE</H1>
        <form action="" onSubmit={handleSubmit}>
          <div className="username">
            <Input type="text" name="Username" placeholder="USERNAME" required/>
          </div>
          <div className="password">
            <Input type="password" name="Password" placeholder="PASSWORD" required/>
          </div>
          <Button type="submit">LOGIN</Button>
        </form>
      </Wrapper>
    </Container>
  )
}

export default Login;
