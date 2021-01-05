import React from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

const PlayersHeader = styled.div`
  border-bottom: 1px solid black;
  text-align: center;
  margin-bottom: 15px
`;

const PlayerNamesContainer = styled.div`
  text-align: left;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 10px;
`

const Name = styled.div`
  font-size: 20px;
  margin-left: 5px;
`

const PlayersCard = () => {
    const renderPlayerName = (name) => (
        <NameContainer>
            <FontAwesomeIcon icon={faUserAlt} size="xs" />
            <Name>{name}</Name>
        </NameContainer>
    )

    return (
      <Card color="#FF9E9E" padding="20px">
          <PlayersHeader>players</PlayersHeader>
          <PlayerNamesContainer>
              {renderPlayerName("sarim")}
              {renderPlayerName("sahifa")}
              {renderPlayerName("sarim")}
          </PlayerNamesContainer>
      </Card>
    )

}

export default PlayersCard