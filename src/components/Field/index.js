import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@material-ui/core";
import { Container } from "./style";
import { makeStyles } from "@material-ui/core/styles";

export default function Field(props) {
  const {
    value,
    onChangeWord,
    index,
    disregard,
    onChangeDisregard,
    onRemoveField,
  } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      marginRight: 15,
      width: "60%",
    },
  }));

  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={11} container alignItems="center">
        <TextField
          classes={{ root: classes.root }}
          value={value}
          onChange={(e) => onChangeWord(e.target.value, index)}
          id="outlined-basic"
          label="Sua palavra ou frase"
          variant="outlined"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={disregard}
              onChange={() => onChangeDisregard(index)}
              color="primary"
            />
          }
          label="Desconsiderar palavras semelhantes"
        />
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onRemoveField(index)}
        >
          Excluir
        </Button>
      </Grid>
    </Grid>
  );
}
