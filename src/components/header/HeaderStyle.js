import styled from 'styled-components';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const Container = styled.div`
  background-color: #00ADB5;
  padding-bottom: 2vh;
  /* height: 100vh; */
`

export const H2 = styled.h2`
  font-size: xx-large;
  margin-bottom: 1vh;
`;


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SimpleSelect = () => {
  const classes = useStyles();
  const [meal, setMeal] = React.useState("");

  const handleChange = (event) => {
    setMeal(event.target.value);
  };

  return (
  );
}
