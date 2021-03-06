import React, { useState, useEffect } from "react";
import { hiragana_divided } from "../../hiragana";
import {
  Container,
  CardContainer,
  Title,
  Table,
  Card,
  CardFront,
  CardBack,
} from "./styles";

import { getRandomSamples } from "../../utils";

const Home = () => {
  const number = 4;
  const [flipCounter, setFlipCounter] = useState(1);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [hiraganaSamples, setHiraganaSamples] = useState([]);
  const [hiraganaPicked, setHiraganaPicked] = useState([]);
  const [gameAdvanced, setGameAdvanced] = useState(0);
  const [openedCards, setOpenedCards] = useState([]);
  const [continuos, setContinuos] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const cards = document.querySelectorAll(".card");
      cards.forEach((element) => {
        element.style.transform = "rotateY(0deg)";
      });
    }, 5000);
  }, []);

  useEffect(() => {
    setScore(gameAdvanced * 10 * continuos + score);

    if (gameAdvanced === 0) {
      const [randomSamples, picked] = getRandomSamples(number * 2);

      setHiraganaSamples(randomSamples);
      setHiraganaPicked(picked);
    }
    if (gameAdvanced % (number * 2) === 0 && gameAdvanced > 0) {
      const [randomSamples, picked] = getRandomSamples(
        number * 2,
        hiraganaPicked
      );
      setHiraganaSamples(randomSamples);
      setHiraganaPicked(picked);
      setContinuos(0);

      setTimeout(() => {
        openedCards.forEach((element) => {
          element.style.transform = "rotateY(0deg)";
        });
        setOpenedCards([]);
      }, 5000);
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
          if (
            openedCards.indexOf(firstCard.ref) === -1 &&
            openedCards.indexOf(secondCard.ref) === -1
          ) {
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
            className="card"
            key={index + 1}
            onClick={(e) => {
              e.currentTarget.querySelector("audio").play();
              if (openedCards.indexOf(e.currentTarget) === -1) {
                e.currentTarget.style.transform = "rotateY(180deg)";
                if (flipCounter >= 2) {
                  setSecondCard({ value, ref: e.currentTarget });
                  setFlipCounter(1);
                } else {
                  setFirstCard({ value, ref: e.currentTarget });
                  setFlipCounter(flipCounter + 1);
                }
              }
            }}
          >
            <audio src={`./sounds/${value.sound}`} type="audio/mpeg"></audio>
            <CardFront>
              <span>{index + 1}</span>
            </CardFront>
            <CardBack color={value.color}>
              <span>{value.character}</span>
              <span>{value.romaji}</span>
            </CardBack>
          </Card>
        ))}
      </CardContainer>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>a</th>
            <th>i</th>
            <th>u</th>
            <th>e</th>
            <th>o</th>
          </tr>
        </thead>
        <tbody>
          {hiragana_divided.map((element) => (
            <tr>
              <td>{element.letter}</td>
              {element.hiragana.map((value) => (
                <td
                  style={{
                    background: value?.color,
                    padding: "12px",
                    color:
                      parseInt(
                        value.color?.match(/hsl\((.+),(.+)%,(.+)%\)/)[3]
                      ) > 30
                        ? "#000"
                        : "#fff",
                  }}
                >
                  {value.character}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
