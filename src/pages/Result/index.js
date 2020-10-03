import { Container, Content, Response } from "./style";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import createRegex from "../../utils/createRegex";

function Result(props) {
  const history = useHistory();
  useEffect(() => {
    if (!props.location.state) {
      history.push("/");
    } else {
      initMatchCalc();
    }
  }, []);
  const [loading, setLoading] = useState(undefined);
  const { text, words, similarWords } = props.location.state;
  const [responses, setResponses] = useState([]);

  function initMatchCalc() {
    let textWords = text.split(" ");
    let searchWords = words.split("\n");
    searchWords.forEach((searchWord) => {
      let response = "";
      let searchWordLength = searchWord
        .split(" ")
        .filter((word) => word.trim() !== "").length;
      if (searchWordLength === 1) {
        response = handleMatchWord(searchWord, textWords);
      } else {
        response = handleMatchPhrase(searchWord, textWords);
      }
      setResponses((previousResponse) => [...previousResponse, response]);
    });
  }

  function handleMatchWord(word, textWords) {
    let matchesFind = 0;
    let matchesCount = 0;
    let regex = createRegex(word, similarWords);
    textWords.forEach((textWord) => {
      let match = textWord
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/,./g, "")
        .match(regex);
      matchesCount += 1;
      if (match) matchesFind += 1;
    });
    return `palavra ${word} teve ${matchesFind} ${
      matchesFind.lenghth > 1 ? " recorrências" : " recorrência"
    }`;
  }

  function handleMatchPhrase(phrase, textWords) {
    let matchesFind = 0;
    let matchesCount = 0;
    let phraseLength = phrase.length;
    const searchPhraseSplitted = phrase
      .split(" ")
      .filter((word) => word.trim() !== "");
    //make regex for each phrase word
    searchPhraseSplitted.forEach((phraseWord, phraseIndex) => {
      let regex = createRegex(phraseWord, similarWords);
      textWords.forEach((textWord, textWordIndex) => {
        let match = textWord
          .toLowerCase()
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/,./g, "")
          .match(regex);
        matchesCount += 1;
        if (match) {
          console.log("textWord: ", textWord);
          console.log("phraseWord: ", phraseWord);
          console.log("----------------------------------------");
          let currentMatch = 0;
          let keepMatching = true;
          while (keepMatching) {
            currentMatch += 1;
            let newRegex = createRegex(phrase[currentMatch], similarWords);
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
    return `frase ${phrase} teve ${matchesFind} ${
      matchesFind.lenghth > 1 ? " recorrências" : " recorrência"
    }`;
  }

  return (
    <Container>
      <Content>
        {responses.map((response, index) => (
          <Response key={index}>{response}</Response>
        ))}
      </Content>
    </Container>
  );
}

export default Result;
