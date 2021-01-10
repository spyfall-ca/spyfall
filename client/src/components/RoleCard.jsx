import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Card from "./Card";

const RoleName = styled.div`
  border-radius: 5px;
  background-color: white;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  padding: 5px;
  font-weight: 600;
  text-transform: uppercase;
`;

const RoleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoleCard = ({ gameData, socket }) => {

  const player = gameData.players.find(player => player.id === socket.id)

  return (
    <Card color="#C8FFF2" height="100%">
      <RoleCardContainer>
        <FontAwesomeIcon icon={faUser} size="6x" color="white" />
        {/* <RoleName>{player.role}</RoleName> */}
        <RoleName>SAHIFA SARIM HELLO</RoleName>
      </RoleCardContainer>
    </Card>
  );
};

export default RoleCard;
