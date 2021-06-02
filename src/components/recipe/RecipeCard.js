import { Card, H5, Img, Button } from "./MainStyle";
import { useHistory } from 'react-router-dom';

const RecipeCard = ({ card }) => {
  const history = useHistory();

  const handleDetails = (card) => {
    history.push({
      pathname: `/details/${card.id}`, card
    });
  }

  const handleError = (e) => {
    e.target.style.visibility = "hidden";
    e.target.style.padding = "0 0 15vh";
  }

  return (
    <Card id={card.id}>
      <H5>{card.recipe.label}</H5>
      <Img src={card.recipe.image} alt={card.recipe.label} onError={handleError}/>
      <Button onClick={() => handleDetails(card)}>View More</Button>
    </Card>
  );
};

export default RecipeCard;
