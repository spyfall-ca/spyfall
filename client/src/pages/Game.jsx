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
import SpyLocationCard from "../components/SpyLocationCard";

const Game = ({ socket, gameData }) => {

  const player = gameData.players.find((player) => player.id === socket.id);

  return (
    <GameContainer>
      <NameCardContainer>
        <NameCard socket={socket} gameData={gameData} />
      </NameCardContainer>
      <PlayersCardContainer>
        <PlayersCard socket={socket} gameData={gameData} />
      </PlayersCardContainer>
      <LocationCardContainer>
        {player.role === "Spy" ? (
          <SpyLocationCard gameData={gameData} />
        ) : (
          <PlayerLocationCard gameData={gameData} />
        )}
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
        <RoleCard gameData={gameData} socket={socket} />
      </RoleCardContainer>
      <EndGameButtonContainer>
        <EndGameCard socket={socket} gameData={gameData} />
      </EndGameButtonContainer>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 4fr 1fr;
  column-gap: 20px;
  row-gap: 10px;
  height: 410px;
  max-width: 750px;
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
