import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextArea } from "../MainText/style";

export default function Field(props) {
  const { value, onChangeWord, similarWords, onChangeSimilarWords } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      background: "white",
      marginRight: 15,
      width: "100%",
    },
  }));

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8} container alignItems="center">
        <TextArea
          value={value}
          onChange={(e) => onChangeWord(e.target.value)}
        />
      </Grid>
      <Grid item xs={6} sm={4} container alignItems="center">
        <FormControlLabel
          style={{ height: 50 }}
          control={
            <Checkbox
              checked={similarWords}
              onChange={onChangeSimilarWords}
              color="primary"
            />
          }
          label="Considerar palavras semelhantes"
        />
      </Grid>
    </Grid>
  );
}
