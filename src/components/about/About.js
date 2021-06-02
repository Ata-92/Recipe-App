import coding from '../../assets/coding.svg';
import { Container, Img, Wrapper, H2, H3, H4 } from './AboutStyle';

const About = () => {
  return (
    <Container>
      <Img src={coding} alt="Coder Icon" />
      <H2>About Software Developer <span><span>A</span>TA</span></H2>
      <Wrapper>
        <H3>I'm Ata</H3>
        <H4>I'm currently learning Full Stack Development</H4>
        <H4>I've already known JS, ReactJS, Django, MongoDB, SQL, Python, Agile, JIRA, HTML, CSS, Bootstrap, Sass</H4>
        <H4><span>Send email</span> : atakal92@gmail.com</H4>
      </Wrapper>
    </Container>
  )
}

export default About;
