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
      <Wrapper>
        <LeftInfo>
          <P>Nutrients</P>
          <P>
            {recipe.totalNutrients.CA.label} :{" "}
            {Math.round(recipe.totalNutrients.CA.quantity)}{" "}
            {recipe.totalNutrients.CA.unit}
          </P>
          <P>
            {recipe.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}{" "}
            {recipe.totalNutrients.CHOCDF.unit}
          </P>
          <P>
            {recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}{" "}
            {recipe.totalNutrients.CHOLE.unit}
          </P>
          <P>
            {recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </P>
          <P>
            {recipe.totalNutrients.FAT.label} :{" "}
            {Math.round(recipe.totalNutrients.FAT.quantity)}{" "}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </P>
          <P>
            {recipe.totalNutrients.PROCNT.label} :{" "}
            {Math.round(recipe.totalNutrients.PROCNT.quantity)}{" "}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </P>
        </LeftInfo>
      </Wrapper>
    </Container>
  );
};

export default Details;
