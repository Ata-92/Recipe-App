import Header from "../header/Header";
import { Container, Wrapper } from './MainStyle';
import { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeContext';
import RecipeCard from "./RecipeCard";

const Main = () => {
  const {cards} = useContext(RecipeContext);

  return (
  )
}

export default Main;
