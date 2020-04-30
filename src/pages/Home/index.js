import React, { useState, useEffect } from "react";

import {
  Container,
  CardContainer,
  Title,
  Card,
  CardFront,
  CardBack,
} from "./styles";
import { hiragana } from "../../hiragana";
import { getRandomArray, duplicateAddID, shuffle } from "../../utils";

const Home = () => {
  const number = 4;
  const [flipCounter, setFlipCounter] = useState(1);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [hiraganaSamples, setHiraganaSamples] = useState([]);
  const [gameAdvanced, setGameAdvanced] = useState(0);
  const [openedCards, setOpenedCards] = useState([]);
  const [continuos, setContinuos] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(gameAdvanced * 10 * continuos + score);

    if (gameAdvanced === 0) {
      let randomArray = getRandomArray(number, [...hiragana], []);
      randomArray = duplicateAddID(randomArray);
      randomArray = shuffle(randomArray);
      setHiraganaSamples(randomArray);
    }
    if (gameAdvanced % (number * 2) === 0 && gameAdvanced > 0) {
      setTimeout(() => {
        let randomArray = getRandomArray(number, [...hiragana], []);
        randomArray = duplicateAddID(randomArray);
        randomArray = shuffle(randomArray);
        setHiraganaSamples(randomArray);
        setContinuos(0);
        openedCards.forEach((element) => {
          element.style.transform = "rotateY(0deg)";
        });
        setOpenedCards([]);
      }, 3000);
    }
    // eslint-disable-next-line
  }, [gameAdvanced]);

  useEffect(() => {
    if (firstCard !== null && secondCard !== null) {
      if (
        firstCard.value.character === secondCard.value.character &&
        firstCard.value.id !== secondCard.value.id &&
        openedCards.indexOf(firstCard.ref) === -1 &&
        openedCards.indexOf(secondCard.ref) === -1
      ) {
        setContinuos(continuos + 1);
        setGameAdvanced(gameAdvanced + 1);
        setOpenedCards([...openedCards, firstCard.ref, secondCard.ref]);
      } else {
        setTimeout(() => {
          if (firstCard.ref !== secondCard.ref) {
            setContinuos(0);
            firstCard.ref.style.transform = "rotateY(0deg)";
            secondCard.ref.style.transform = "rotateY(0deg)";
          }
        }, 1000);
      }
    }
    // eslint-disable-next-line
  }, [secondCard]);

  return (
    <Container>
      <Title>{`Score: ${score}`}</Title>
      <CardContainer numberRowsAndColumns={number} size={300}>
        {hiraganaSamples.map((value, index) => (
          <Card
            key={index + 1}
            onClick={(e) => {
              if (flipCounter >= 2) {
                setSecondCard({ value, ref: e.currentTarget });
                setFlipCounter(1);
              } else {
                setFirstCard({ value, ref: e.currentTarget });
                setFlipCounter(flipCounter + 1);
              }
              if (openedCards.indexOf(e.currentTarget) === -1) {
                e.currentTarget.style.transform = "rotateY(180deg)";
                e.currentTarget.querySelector("audio").play();
              }
            }}
          >
            <audio src={`./sounds/${value.sound}`} type="audio/mpeg"></audio>
            <CardFront>
              <span>{index + 1}</span>
            </CardFront>
            <CardBack color={value.color}>
              <span>{value.character}</span>
            </CardBack>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Home;
