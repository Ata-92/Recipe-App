import {
  Container,
  Heading,
  H2,
  Img,
  LeftInfo,
  Li,
  Ol,
  P,
  RecipeImage,
  RightInfo,
  Wrapper,
} from "./DetailsStyle";
import diet from "../../assets/diet.svg";

const Details = (props) => {

  return (
    <Container>
      <Heading>
        <H2>{recipe.label}</H2>
        <Img src={diet} alt="Diet Icon" />
      </Heading>
    </Container>
  );
};

export default Details;
