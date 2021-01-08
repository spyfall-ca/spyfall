import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Card from "./Card";

const CardContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  overflow-x: hidden;
`;

const NameCard = ({ socket, gameData }) => {
  
  const player = gameData.players.find(player => player.id === socket.id)
  
  return (
      <Card color="#C8FFF2">
        <CardContainer>
          <FontAwesomeIcon
            icon={faPoo}
            size="xs"
            style={{ marginRight: 5 }}
          />
          <div>{player.name}</div>
        </CardContainer>
      </Card>
  );
};

export default NameCard;
