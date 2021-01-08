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
`;

const RoleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoleCard = () => {
  return (
    <Card color="#C8FFF2">
      <RoleCardContainer>
        <FontAwesomeIcon icon={faUser} size="6x" color="white" />
        <RoleName>Spy SARIM SAHIFA HELLO</RoleName>
      </RoleCardContainer>
    </Card>
  );
};

export default RoleCard;
