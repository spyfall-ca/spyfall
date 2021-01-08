import React from "react";
import styled from "styled-components";

import PlayersCard from "../components/PlayersCard";
import NameCard from "../components/NameCard";
import PlayerLocationCard from "../components/PlayerLocationCard";
import RoomCodeCard from "../components/RoomCodeCard";
import CountdownCard from "../components/CountdownCard";
import { RulesButton } from "../components/RulesCard";
import RoleCard from "../components/RoleCard";
import EndGameCard from "../components/EndGameCard";
import Button from "../components/Button";

const StyledText = styled.div`
  font-size: 20px;
`;

const Game = ({ socket, gameData }) => {
  return (
    <GameContainer>
      <NameCardContainer>
        <NameCard socket={socket} gameData={gameData} />
      </NameCardContainer>
      <PlayersCardContainer>
        <PlayersCard socket={socket} gameData={gameData} />
      </PlayersCardContainer>
      <LocationCardContainer>
        <PlayerLocationCard socket={socket} gameData={gameData} />
      </LocationCardContainer>
      <RoomCodeCardContainer>
        <RoomCodeCard gameData={gameData} />
      </RoomCodeCardContainer>
      <CountdownCardContainer>
        <CountdownCard socket={socket} />
      </CountdownCardContainer>
      <RulesButtonContainer>
        <RulesButton />
      </RulesButtonContainer>
      <RoleCardContainer>
        <RoleCard />
      </RoleCardContainer>
      <EndGameButtonContainer>
        <EndGameCard socket={socket} gameData={gameData} />
      </EndGameButtonContainer>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 45% 30%;
  grid-template-rows: fit-content(10%) fit-content(10%) fit-content(50%) fit-content(
      10%
    );
  max-width: 750px;
  align-content: stretch;
  column-gap: 15px;
  row-gap: 10px;
`;

const NameCardContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const PlayersCardContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 5;
`;

const LocationCardContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  height: 100%;
`;

const RoomCodeCardContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
`;

const CountdownCardContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const RulesButtonContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const RoleCardContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
`;

const EndGameButtonContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
`;

export default Game;
