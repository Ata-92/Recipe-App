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
  return (
  )
}

export default AppRouter;
