import React from "react";
import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";
import { TextArea } from "../MainText/style";

export default function Field(props) {
  const {
    value,
    onChangeWord,
    similarWords,
    onChangeSimilarWords,
    placeholder,
  } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8} container alignItems="center">
        <TextArea
          placeholder={placeholder}
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
