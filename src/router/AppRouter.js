import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';
import Login from '../components/login/Login';
import About from '../components/about/About';
import Main from '../components/recipe/Main';
import Details from '../components/details/Details';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  const [login, setLogin] = useState(false);
  const [cards, setCards] = useState();
  const [query, setQuery] = useState();
  const APP_ID = "e97f3f42";
  const APP_KEY = "a4a3f97b1eb28df3474e7ce892e74e6d";

  const getRecipe = async(query) => {
    if (query) {
      try {
        const response = await axios({
          method: "GET",
          url: `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        });

        const data = response.data.hits.map((recipe, index) => ({
          id: index,
          recipe: recipe.recipe
        }));

        setCards(data);

      } catch (err) {
        console.log(err.message);
        alert(`Your query ${query} is invalid. Please try again.`)
      }
    }
  }

  useEffect(() => getRecipe(query), [query]);

  const handleClick = (queryTerm) => {
    setQuery(queryTerm.current.children[1].children[0].value);
  }

  const AuthContainer = () => {
    return (
    <>
      <Navbar />
      <PrivateRouter login={login} path="/" exact component={Main}/>
      <PrivateRouter login={login} path="/about" exact component={About}/>
      <PrivateRouter login={login} path="/details/:id" exact component={Details}/>
    </>
    )
  }

  return (
  )
}

export default AppRouter;
