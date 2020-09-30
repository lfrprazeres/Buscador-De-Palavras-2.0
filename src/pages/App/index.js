import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Field, Header, MainText } from "../../components";
import { Content, SearchText } from "./style";

function App() {
  const [words, setWords] = useState([
    {
      word: "",
      disregard: false,
    },
  ]);
  const [text, setText] = useState("");

  function handleChangeWord(word, index) {
    setWords(
      words.map((field, fieldIndex) => {
        if (fieldIndex === index) {
          return {
            ...field,
            word,
          };
        }
        return field;
      })
    );
  }

  function handleChangeDisregard(index) {
    setWords(
      words.map((field, fieldIndex) => {
        if (fieldIndex === index) {
          return {
            ...field,
            disregard: !field.disregard,
          };
        }
        return field;
      })
    );
  }

  function handleRemoveField(index) {
    setWords(words.filter((field, fieldIndex) => fieldIndex !== index));
  }

  return (
    <>
      <Header />
      <Content>
        <MainText text={text} setText={setText} />
        <SearchText>Digite a palavra ou frase que deseja buscar</SearchText>
        {words.map((field, index) => (
          <Field
            value={field.word}
            onChangeWord={handleChangeWord}
            onChangeDisregard={handleChangeDisregard}
            onRemoveField={handleRemoveField}
            key={index}
            disregard={field.disregard}
            index={index}
          />
        ))}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setWords([...words, { word: "", disregard: false }]);
              }}
            >
              Adicionar nova Palavra
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button variant="outlined" color="primary">
              Buscar Palavras
            </Button>
          </Grid>
        </Grid>
      </Content>
    </>
  );
}

export default App;
