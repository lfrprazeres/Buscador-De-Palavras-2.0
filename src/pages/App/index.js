import { Button, Grid, Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import { Field, Header, MainText } from "../../components";
import { Content, SearchText } from "./style";
import { useHistory } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";

function App() {
  let history = useHistory();
  const [words, setWords] = useState("");
  const [similarWords, setSimilarWords] = useState(false);
  const [text, setText] = useState("");

  return (
    <>
      <Header />
      <Content>
        <MainText text={text} setText={(text) => setText(text)} />
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <SearchText>Digite a palavra ou frase que deseja buscar</SearchText>
          </Grid>
          <Grid item>
            <Tooltip
              title="Faça a pesquisa das suas palavras separadas por enter, frases também
          são possíveis, porém serão consideradas apenas frases idênticas (ignorando caps e acentos)"
            >
              <InfoIcon />
            </Tooltip>
          </Grid>
        </Grid>
        <Field
          value={words}
          placeholder="Digite as palavras ou frases que deseja pesquisar separadas por ENTER, qualquer palavra não separada por enter será considerada uma frase"
          onChangeWord={(text) => setWords(text)}
          onChangeSimilarWords={() => setSimilarWords(!similarWords)}
          similarWords={similarWords}
        />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                if (text.trim() !== "" && words.trim() !== "") {
                  history.push({
                    pathname: "/result",
                    state: {
                      text,
                      words,
                      similarWords,
                    },
                  });
                } else {
                  alert("Digite o texto e o que deseja pesquisar nele!");
                }
              }}
            >
              Buscar Palavras
            </Button>
          </Grid>
        </Grid>
      </Content>
    </>
  );
}

export default App;
