import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Field, Header, MainText } from "../../components";
import { Content, SearchText, Response } from "./style";
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();
  let matchesCount = 0;
  const [words, setWords] = useState(
    "Última\nvoltar\ndiferente \nAcordo\nConsenso\nencerramos\nnão é a primeira vez\njustiça demorada \ndemora\nencerrado\nsatisfeito\nAcordo\nacordo entre as partes\nterceira audiência\ndeu errado\nrecorrer\nconsenso\nChateado\nAdvogado\nesperava fazer o acordo\nEspero um acordo\nResolver\nProcesso\ncustas\nCorreu tudo bem\nGostei\nsegunda vez\ndiferente\ncumprir\nfoi bom\nacordo\nResolvemos \nRuim\nfaltar o trabalho\nsegunda vez\nvoltar\natrasar\nperda de tempo\natraso\nAcordo\nAdvogada\nresolver\nnão teve acordo\nJuiz\nAcordo\nProcesso \nFoi estranho\noutro processo\nfoi diferente\nConcordamos\nnão entendi\ndesnecessário\nperder maior tempão\nimparcialidade\nOuvir\nConversa\nRápida\nvontade das partes\nMediadora \nExplicou \nacordo\naudiência \ndiálogo\nsessão longa\nPerda de tempo\nFrustrado\nConfortável\nIrritado \nargumentos \nproblema resolvido \nsolucionar \nlamentável\nimportância\ndesafogar mediador\nmediador preparado \nformação dos mediadores\nsuperficial\nFrustrante\nConciliação \nvontade \nsolucionar \nrápido \namigável \neficácia"
  );
  const [similarWords, setSimilarWords] = useState(false);
  const [text, setText] = useState(
    "Espero que essa seja a última sessão que a gente resolva e entre em acordo para que a gente não tenha que voltar mais aqui no fórum. Digamos que, aconteceu, só que não foi da forma como eu esperava que aconteceria. Mas no final acabou acontecendo o que eu estava aguardando. Eu esperava que fosse diferente a nossa conversa, acho que... acreditava que ambas as partes já estavam interessadas em fazer um acordo, mas na verdade não, entendeu, foi apenas da minha parte. Mas ao longo da mediação a gente chegou num consenso e encerramos, felizmente. Dessa vez, por que essa não é a primeira que a gente veio aqui... por que na verdade eu acho a justiça demorada demais, se essa audiência que a gente teve hoje fosse a mesma que tivesse tido desde a primeira vez que eu vim aqui eu estaria contente. Digamos que eu não esteja totalmente feliz pela demasiada demora que a justiça tem por outro lado a de hoje foi a melhor de todas, dando por encerrado o processo, então posso me considerar satisfeito. É... um acordo entre as partes, que seja bom para todos. Só isso. Sim, aconteceu. Foi feito um acordo entre as partes. Foi uma coisa justa que foi bom para todas as partes, foi o certo para os dois.  Este acordo na verdade não vai fazer muita diferença, por que o problema mesmo é com o outro primo que está alugando a casa da minha Avó sem dividir o valor com os irmãos.  Espero que corra tudo certo, que já é a terceira audiência né... e estamos só aguardando a outra parte aceitar ou não o que nós estamos pedindo, esperamos que dê tudo certo né. Acredito que será feito acordo, apesar que a gente fala da gente né, mas a outra cabeça é diferente né, não sei vamos ver. Acredito que vai ser bom com certeza, tem que ser.  Não, não chegamos a um acordo junto com os advogados da parte lá, não chegamos a um acordo por um pequeno detalhe, vamos aguardar agora o comercial deles né, para a gente ver o que que vai resolver. Mas aqui foi tudo por água a baixo, entendeu? Nada deu certo, deu errado. Não acho que foi problema da mediação, muito pelo contrário, é coisa mesmo da outra parte. A mediação foi muito bem conduzida, o negócio entendeu... a questão da conversação foi muito bem conduzida sem problema nenhum... na verdade as advogadas... é um escritório contratado né, eles vêm só dizer sim ou não, aí ficou nisso. Agora cabe à gente recorrer lá à outra instância, né, que se fala, em outra instância para a gente ver o que se chega a um consenso lá fora. Pessoalmente estou chateado, mas juridicamente meu advogado já me tranquilizou dizendo que o procedimento é esse mesmo. Pessoalmente estou me sentindo péssimo por que a gente esperava fazer o acordo, mas existe a justiça né... vamos ver. Espero um acordo. Acho que vai ter um acordo para resolver da melhor forma possível. Porque geralmente a mediação é para tentar fazer um acordo, fazer a mediação de... dívidas né... e o melhor conciliamento(sic). Eu acho que vai dar certo, a primeira impressão que passa né, é que vai ter um acordo e que não precisa levar o processo adiante. Por que às vezes quando vai levar o processo a diante tem as custas tem todo o custo processual. E sendo assim já dá pra enxugar. Faz um enxugamento, tenta resolver da melhor forma possível dependendo do bom senso de cada parte e se a pessoa tiver bom senso dá para resolver numa boa. O ruim é quando não tem bom senso aí não tem como a mediação intervir aí vai pro pau. Aconteceu, foi bem assim, ambas as partes estavam disponíveis a fazer o acordo. Correu tudo bem, cada um deu sua opinião, mostrou o contrato, que é opção de ambas as partes, conciliou e nisso foi dado o resultado, e o resultado foi positivo para mim, foi favorável. Estou aliviada que entrou em acordo. Gostei do procedimento e de como foi e ambas as partes estavam dispostas a fazer um acordo isso foi muito positivo. Na verdade, eu queria resolver isso logo, já é a segunda vez que eu venho aqui e nada! Se ele (o Réu) entender que é obrigação dele ver o filho seria mais fácil, mas ele sempre dá uma desculpa. Da outra vez foi a mesma coisa, a gente veio aqui e conversou, mas no fim não ficou nada certo porque ele não quer se comprometer. Então eu espero que a gente resolva isso hoje. Dessa vez a gente conseguiu fazer um acordo, agora vamos ver se ele vai cumprir né, o que eu acho difícil. Ah! Na verdade, eu achei que seria diferente… não tinha nem juiz! Eu queria que ele soubesse que a justiça é séria e se ele não cumprir ele vai ter que pagar, mas acho que já foi bom ter feito o acordo. Vamos ver. Eu espero que a gente faça um acordo que seja bom pra todo mundo né. Falaram que aqui é para fazer um acordo entre as partes, mas se não der pra eu cumprir não vou aceitar não, porque se não cumprir sou eu que vou preso. Cara, dessa vez a gente conseguiu conversar melhor e chegar num acordo. Então foi bom. Achei bom porque resolvemos, mas o ruim é que tive que faltar o trabalho e ficar aqui esperando, e já é a segunda vez, então o patrão já está ficando puto né. Mas se não tiver que voltar mais aqui está bom. Eu na verdade não espero nada, só perda de tempo, porque não existe acordo, nós já tentamos fazer acordo várias vezes antes mas eles (demais herdeiros) não aceitam, eles querem ficar com tudo, mas sabem que não tem direito, então estão querendo atrasar o inventário porque, enquanto isso, eles estão alugando as casas do meu  (de cujus) e ficando com o dinheiro. Aconteceu exatamente o que eu esperava, nada! Entramos lá eu disse que não tinha acordo. Só isso. Uma perda de tempo e um atraso no processo. Era muito mais fácil o Juiz decidir de uma vez, mas ficam obrigando a gente a participar desta audiência que a advogada disse que é para tentar fazer um acordo, sendo que já informamos no processo que não tem acordo. Então eu não entendo qual a utilidade disso. Eu não sei, não entendo muito bem essas coisas. Sei que vamos tentar fazer um acordo, mas vou deixar isso para advogada resolver porque eu não sei o que falar lá dentro não. Nós não tínhamos como fazer o acordo que eles queriam (demais herdeiros), então não teve acordo. Mas já sabíamos que não ia ter acordo, porque desde o início já está tendo muita briga. Essas coisas jurídicas são assim mesmo né, espero que o Juiz decida isso logo. Pelo que eu entendi se tiver acordo o processo já acaba aqui, espero que tenha acordo. Foi estranho, porque eu já tive um outro processo contra a Oi (empresa de telefonia) e teve também uma audiência para tentar um acordo, mas foi diferente. Eu pensei que seria daquele jeito, mas não foi. Nós viemos aqui e concordamos que ela é filha do meu pai, nós já sabíamos disso há muito tempo, não precisava nem de processo. Aí nós concordamos, mas mesmo assim tem que fazer o exame de DNA, então não entendi o porquê de a gente vir aqui, podia ter feito o DNA direto.  Não sei, achei desnecessário a gente ter que vir aqui e perder maior tempão pra no fim ter que continuar o processo de qualquer forma. Não tinha qq expectativa, sinceramente. Uma sessão rápida, com algumas argumentações e que fosse respeitada a vontade das partes. Ouvir a outra parte Acordo Conversa entre as partes Primeiro, imparcialidade do mediador, isso é o que sempre eu espero de uma boa mediação..... Uma tentativa de acordo Esperava que as partes entrariam em um acordo intermediado pela mediadora. Que o mediador conduzisse de forma a obter um acordo favorável a ambas as partes. Não. Não. Uma sessão longa, com argumentos sem conhecimento do problema, faz a oitiva de uma parte, faz de outra é nada, absolutamente nada se resolve. Perda de tempo para as partes. Sim, ouvi Não Sim. Conversamos com a parte ré e chegamos a um acordo. Em regra, pelo aqui em Petrópolis a mediação como prevista no CPC não acontece. Quem faz esse papel é o secretário do Juízo, que nem mediador é. Acaba sendo uma audiência igual a do JEC.... Não. Acredito que a finalidade da audiência era mais tentar o diálogo entre as partes Sim, aconteceu. Era uma ação de família, que tratava sobre a guarda do menor de idade. A mediadora explicou as partes a importância de se chegar a um acordo e explicou também os pós e contras caso não fosse possível chegar a um consenso. Ao final, as partes, mesmo um pouco resistentes, acabaram entrando em um acordo por receio de chegar ao final do processo e correrem o risco de uma delas ficar mais prejudicada. Esperava a resolução do problema de forma amigável o que de fato aconteceu. Irritado tendo que ouvir aqueles argumentos desfundados. Confortável Em uma audiência de conciliação normal Senti que poderia ter um pouco mais de avanço. Frustrado.... Tranquilo Senti confortável, pois como advogada, sempre prezei por um método alternativo de resolução de conflitos. Sensação de alívio por ter o problema resolvido e não precisar ir para uma batalha no tribunal. Para mim, o mediador judicial tem atuado como um conciliador de aud de JEC. Ou seja, sem muito interesse de solucionar a questão de modo amigável. Acho lamentável, mas afirmo de acordo com a experiências que tive. Melhor seria nos moldes da Conciliação do antigo CPC Não Acredito que deveríamos ter uma formação mais profunda dos mediadores, não agindo de forma superficial A mediação é salutar, mas quando realmente realizada por um mediador formado e preparado para tal mister.... Frustrante A mediação judicial é de extrema importância, até para desafogar a quantidade de processos, que muitas vezes pode ser resolvido entre as partes amigavelmente por interversão de um mediador, sem a necessidade de um magistrado. Como sugestão aos tribunais, penso que todo processo que houver audiência, deveria antes marcar a mediação e, não sendo possível um acordo entre as partes, ser encaminhado diretamente ao magistrado. Que as pessoas que estejam de fato com vontade de solucionar os problemas mais rápido e de forma amigável que abram a mente para a eficácia da mediação."
  );
  const [responses, setResponses] = useState([]);
  const [responseValues, setResponseValues] = useState({
    valuesMatched: 0,
    maxValuesToMatch: 0,
  });

  function handleSetText(text) {
    setText(text);
  }

  function handleSearchWords() {
    let textWords = text.split(" ");
    let searchWords = words.split("\n");
    setResponseValues({
      ...responseValues,
      maxValuesToMatch: textWords.length * searchWords.length,
    });
    handleFindMatches(textWords, searchWords);
  }

  function handleFindMatches(textWords, searchWords) {
    for (const [searchWordIndex, searchWord] of searchWords.entries()) {
      let searchWordLength = searchWord
        .split(" ")
        .filter((word) => word.trim() !== "").length;
      if (searchWordLength === 1) {
        handleMatchWord(textWords, searchWord, searchWords, searchWordIndex);
      } else {
        handleMatchPhrase(textWords, searchWord, searchWords, searchWordIndex);
      }
    }
  }

  function handleMatchWord(
    textWords,
    searchWord,
    searchWords,
    searchWordIndex
  ) {
    let matchsFind = 0;
    let matchtries = 0;
    // try to match words
    let regex = createRegex(searchWord);
    for (const textWord of textWords) {
      let match = textWord
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/,./g, "")
        .match(regex);
      matchtries += 1;
      matchesCount += 1;

      if (match) matchsFind += 1;
    }
    setResponseValues((previoustResponseValues) => ({
      ...previoustResponseValues,
      valuesMatched: previoustResponseValues.valuesMatched + matchtries,
    }));
    // update responses state
    searchWords.map((newListWord, newListindex) => {
      if (newListindex === searchWordIndex) {
        const newResponse = {
          word: newListWord,
          matchs: matchsFind,
        };
        const hasResponse = responses.find(
          (oldResponse) => oldResponse.word === newResponse.word
        );
        if (!hasResponse) {
          setResponses((previousResponse) => [
            ...previousResponse,
            newResponse,
          ]);
        } else {
          const newResponses = responses.map((oldResponse) => {
            if (oldResponse.word === newResponse.word) {
              return newResponse;
            }
            return oldResponse;
          });
          setResponses(newResponses);
        }
      }
    });
  }

  useEffect(() => console.log("matchesCount: ", matchesCount), [matchesCount]);

  function handleMatchPhrase(
    textWords,
    searchWord,
    searchWords,
    searchWordIndex
  ) {
    // console.log("textWords: ", textWords);
    // console.log("searchWord: ", searchWord);
    // console.log("searchWords: ", searchWords);
    // console.log("searchWordIndex: ", searchWordIndex);
    const searchPhraseSplitted = searchWord
      .split(" ")
      .filter((word) => word.trim() !== "");
    setResponseValues((previoustResponseValues) => ({
      ...previoustResponseValues,
      maxValuesToMatch:
        previoustResponseValues.maxValuesToMatch +
        searchPhraseSplitted.length -
        1,
    }));
    for (const searchPhraseWord of searchPhraseSplitted) {
      let matchsFind = 0;
      let regex = createRegex(searchPhraseWord);
      // for (const textWord of textWords) {
      // }
    }
  }

  function createRegex(text) {
    if (similarWords) {
      return new RegExp(
        `${text
          .toLowerCase()
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/,./g, "")}`,
        "i"
      );
    }
    return new RegExp(
      `^[.,;!?]{0,}${text
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/,./g, "")}[.,;!?]{0,}$`,
      "i"
    );
  }

  return (
    <>
      <Header />
      <Content>
        <MainText text={text} setText={handleSetText} />
        <SearchText>Digite a palavra ou frase que deseja buscar</SearchText>
        <Field
          value={words}
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
                history.push({
                  pathname: "/result",
                  state: {
                    text,
                    words,
                    similarWords,
                  },
                });
                // setLoading(true);
                // setResponseValues({
                //   valuesMatched: 0,
                //   maxValuesToMatch: 0,
                // });
                // setResponses([]);
                // handleSearchWords();
              }}
            >
              Buscar Palavras
            </Button>
          </Grid>
          {/* <Grid item xs={12} container>
            <Grid item xs={6}>
              {!loading &&
                responseValues.valuesMatched ===
                  responseValues.maxValuesToMatch &&
                responses.map((response, index) => (
                  <Response key={index}>
                    a palavra {response.word} obteve {response.matchs}
                    {response.matchs > 1 ? " recorrências" : " recorrência"}
                  </Response>
                ))}
              {loading && (
                <div>
                  carregando... {responseValues.valuesMatched} de
                  {" " + responseValues.maxValuesToMatch} combinações possíveis
                  analisadas
                </div>
              )}
            </Grid>
          </Grid> */}
        </Grid>
      </Content>
    </>
  );
}

export default App;
