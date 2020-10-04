import { Container, Response } from "./style";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import createRegex from "../../utils/createRegex";
import { Doughnut, HorizontalBar } from "react-chartjs-2";
import { AppBar, Tab, Tabs, Grid } from "@material-ui/core";
import randomcolor from "randomcolor";

function Result(props) {
  const history = useHistory();
  const { state } = props.location;
  useEffect(() => {
    if (!state) {
      history.push("/");
    } else {
      const { text = "", words = "" } = state;
      if (text.trim() !== "" && words.trim() !== "") {
        initMatchCalc();
      } else {
        alert("Digite o texto e o que deseja pesquisar nele!");
        setTimeout(() => {
          history.push("/");
        }, 1000);
      }
    }
  }, [history]);
  const { text, words, similarWords } = state;
  const [responses, setResponses] = useState([]);
  const [typeResponse, setTypeResponse] = useState(0);
  const [maxMatches, setMaxMatches] = useState(0);

  function initMatchCalc() {
    let textWords = text.split(" ");
    let searchWords = words.split("\n");
    searchWords.forEach((searchWord) => {
      let response = "";
      let searchWordLength = searchWord
        .split(" ")
        .filter((word) => word.trim() !== "").length;
      if (searchWordLength === 1 && searchWord.trim() !== "") {
        response = handleMatchWord(searchWord, textWords);
        if (response.matches !== 0) {
          setResponses((previousResponse) => [...previousResponse, response]);
        }
      } else if (searchWordLength > 1 && searchWord.trim() !== "") {
        response = handleMatchPhrase(searchWord, textWords);
        if (response.matches !== 0) {
          setResponses((previousResponse) => [...previousResponse, response]);
        }
      }
      setMaxMatches((previousMatches) =>
        response.matches > previousMatches ? response.matches : previousMatches
      );
    });
  }

  function handleMatchWord(word, textWords) {
    let matchesFind = 0;
    let regex = createRegex(word, similarWords);
    textWords.forEach((textWord) => {
      let match = textWord
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/,./g, "")
        .match(regex);
      if (match) matchesFind += 1;
    });
    return {
      matches: matchesFind,
      type: "word",
      label: word,
    };
  }

  function handleMatchPhrase(phrase, textWords) {
    let matchesFind = 0;
    const searchPhraseSplitted = phrase
      .split(" ")
      .filter((word) => word.trim() !== "");
    let phraseLength = searchPhraseSplitted.length;
    //make regex for each phrase word
    searchPhraseSplitted.forEach((phraseWord, phraseIndex) => {
      let regex = createRegex(phraseWord, false);
      textWords.forEach((textWord, textWordIndex) => {
        let match = textWord
          .toLowerCase()
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/,./g, "")
          .match(regex);
        if (match) {
          let currentMatch = 0;
          let keepMatching = true;
          while (keepMatching && currentMatch <= phraseLength) {
            currentMatch += 1;
            let newRegex = createRegex(
              searchPhraseSplitted[currentMatch],
              similarWords
            );
            let newMatch =
              textWords[textWordIndex + currentMatch] &&
              textWords[textWordIndex + currentMatch]
                .toLowerCase()
                .trim()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/,./g, "")
                .match(newRegex);
            if (newMatch && currentMatch === phraseLength) matchesFind += 1;
            if (!newMatch) keepMatching = false;
          }
        }
      });
    });
    return {
      matches: matchesFind,
      type: "phrase",
      label: phrase,
    };
  }

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <>{children}</>}
      </div>
    );
  }

  return (
    <Container container>
      <AppBar>
        <Tabs
          value={typeResponse}
          onChange={(event, newValue) => setTypeResponse(newValue)}
          centered
          indicatorColor="secondary"
        >
          <Tab label="Escrita" {...a11yProps(0)} />
          <Tab label="Gráficos" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={typeResponse} index={0}>
        <Grid container spacing={1} style={{ margin: "0 -8px" }}>
          {responses.map((response, index) => (
            <Grid item xs={3}>
              <Response key={index}>
                {response.type === "phrase" ? "Frase " : "Palavra "}"
                {response.label}" teve {response.matches}
                {response.matches > 1 ? " recorrências" : " recorrência"}
              </Response>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={typeResponse} index={1} style={{ marginTop: 50 }}>
        <HorizontalBar
          data={{
            datasets: [
              {
                data: responses.map((response) => response.matches),
                backgroundColor: responses.map(() => randomcolor()),
              },
            ],
            labels: responses.map((response) => response.label),
          }}
          width={window.innerWidth * 0.6}
          height={window.innerHeight / 2}
          style={{ marginBottom: 50 }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    stepSize: Math.ceil(maxMatches / 2),
                    max: maxMatches,
                  },
                },
              ],
            },
          }}
        />
        <Doughnut
          data={{
            datasets: [
              {
                data: responses.map((response) => response.matches),
                backgroundColor: responses.map(() => randomcolor()),
              },
            ],
            labels: responses.map((response) => response.label),
          }}
          width={window.innerWidth / 2}
          height={window.innerHeight / 2}
          options={{
            responsive: true,
          }}
        />
      </TabPanel>
    </Container>
  );
}

export default Result;
