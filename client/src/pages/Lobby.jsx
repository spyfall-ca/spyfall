import React, { useState } from "react";
import styled from "styled-components";

import Game from "./Game";
import PlayersCard from "../components/PlayersCard";
import NameCard from "../components/NameCard";
import TimeCard from "../components/TimeCard";
import RoomCodeCard from "../components/RoomCodeCard";
import RulesCard from "../components/RulesCard";
import Button from "../components/Button";
import InProgressModal from "../components/InProgressModal";
import RevealPlayerModal from "../components/RevealPlayerModal";

const LobbyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 350px;
  max-width: 750px;
  column-gap: 20px;
  row-gap: 10px;
  height: 410px;
`;

const TopButtonsContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const NameCardContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const RulesCardContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const StyledText = styled.div`
  font-size: 20px;
`;

const PlayersCardContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Lobby = ({
  socket,
  gameData,
  setShowInProgressModal,
  showInProgressModal,
}) => {
  const [startGame, setStartGame] = useState(false);

  socket.on("startGameSuccess", (boolean) => {
    setStartGame(boolean);
  });

  const TopButtons = ({ socket, gameData }) => {
    return (
      <ButtonContainer>
        <RoomCodeCard gameData={gameData} />
        <TimeCard />
        <Button
          color="#7331FF"
          disabled={socket.id === gameData.host ? false : true}
          onClick={() => socket.emit("startGame")}
        >
          <StyledText>start game</StyledText>
        </Button>
      </ButtonContainer>
    );
  };

  return (
    <React.Fragment>
      {startGame === true && gameData.inProgress ? (
        <Game socket={socket} gameData={gameData} />
      ) : (
        <LobbyContainer>
          <NameCardContainer>
            <NameCard socket={socket} gameData={gameData} />
          </NameCardContainer>
          <PlayersCardContainer>
            <PlayersCard socket={socket} gameData={gameData} />
          </PlayersCardContainer>
          <TopButtonsContainer>
            <TopButtons socket={socket} gameData={gameData} />
          </TopButtonsContainer>
          <RulesCardContainer>
            <RulesCard />
          </RulesCardContainer>
          <InProgressModal
            showModal={showInProgressModal}
            setShowModal={setShowInProgressModal}
          />
        </LobbyContainer>
      )}
      <RevealPlayerModal socket={socket} />
    </React.Fragment>
  );
};

export default Lobby;
