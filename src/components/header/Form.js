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
      <Grid item>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          variant="outlined"
          style={{backgroundColor: "#fff", borderRadius: ".5vw"}}
          ref={queryTerm}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          size="large"
          style={{
            textTransform: "none",
            padding: "2vh 1vw",
            fontWeight: "bolder",
          }} onClick={() => handleClick(queryTerm)}
        >
          Search
        </Button>
      </Grid>
      <Grid item>
        <SimpleSelect />
      </Grid>
    </Grid>
  );
};

export default Form;
