import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
`;

export const CardContainer = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: grid;

  grid-template-columns: ${(props) =>
    `repeat(${props.numberRowsAndColumns},1fr)`};

  grid-template-rows: ${(props) => `repeat(${props.numberRowsAndColumns},1fr)`};
  grid-gap: 3px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.8s;
  transform-style: preserve-3d;
  /* transform: rotateY(180deg); */
`;

export const CardFront = styled.div`
  background: linear-gradient(45deg, #210a40, #0089ff);
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: rgba(255, 255, 255, 0.87);
    font-size: 2rem;
    text-align: center;
  }
`;
export const CardBack = styled.div`
  background: ${(props) => props.color || "blue"};
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: ${(props) =>
      parseInt(props.color.match(/hsl\((.+),(.+)%,(.+)%\)/)[3]) > 40
        ? "#000"
        : "#fff"};
    /* color: white; */
    font-size: 2rem;
    text-align: center;
    &:nth-child(2) {
      font-size: 1rem;
    }
  }
`;
