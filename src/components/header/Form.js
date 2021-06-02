import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import { SimpleSelect } from "./HeaderStyle";
import { useRef, useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext';

const Form = () => {
  const { handleClick } = useContext(RecipeContext);
  const queryTerm = useRef();

  return (
    <Grid container justify="center" alignItems="center" spacing={2} style={{border: ".1vw solid #fff", borderRadius: ".3vw", width: "32%", margin: "auto"}}>

    </Grid>
  );
};

export default Form;
