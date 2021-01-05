import React from "react";
import styled from "styled-components";

import PlayersCard from "../components/PlayersCard";
import NameCard from "../components/NameCard";
import TimeCard from "../components/TimeCard";
import RoomCodeCard from "../components/RoomCodeCard";
import RulesCard from "../components/RulesCard";
import Button from "../components/Button";

const LobbyContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 15% 75%;
  max-width: 750px;
  align-content: stretch;
  column-gap: 20px;
  row-gap: 10px;
`;

const NameCardContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const PlayerCardContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const TopButtonsContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
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

const TopButtons = () => {
  return (
    <ButtonContainer>
      <RoomCodeCard />
      <TimeCard />
      <Button color="#7331FF">
        <StyledText>start game</StyledText>
      </Button>
    </ButtonContainer>
  );
};

const Lobby = () => {
  return (
    <LobbyContainer>
      <NameCardContainer>
        <NameCard />
      </NameCardContainer>
      <PlayerCardContainer>
        <PlayersCard />
      </PlayerCardContainer>
      <TopButtonsContainer>
        <TopButtons />
      </TopButtonsContainer>
      <RulesCardContainer>
        <RulesCard />
      </RulesCardContainer>
    </LobbyContainer>
  );
};

export default Lobby;
