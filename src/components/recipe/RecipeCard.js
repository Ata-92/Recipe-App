import { Card, H5, Img, Button } from "./MainStyle";
import { useHistory } from 'react-router-dom';

const RecipeCard = ({ card }) => {
  return (
    <Card id={card.id}>
      <H5>{card.recipe.label}</H5>
      <Img src={card.recipe.image} alt={card.recipe.label} onError={handleError}/>
      <Button onClick={() => handleDetails(card)}>View More</Button>
    </Card>
  );
};

export default RecipeCard;
