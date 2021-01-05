import React from 'react';
import Card from './Card';
import styled from "styled-components";

const PlayersContainer = styled.div`
`;

const PlayersHeader = styled.div`
  font-size: 20px;
  border-bottom: 1px solid black;
  text-align: center;
`;

const PlayerNamesContainer = styled.div`
  align-items: left;
  text-align: left;
`;

const PlayersCard = () => {
    return (
        <Card color="#FF9E9E">
            <PlayersContainer>
                <PlayersHeader>Players</PlayersHeader>
                <PlayerNamesContainer>
                    <div>Sarim</div>
                    <div>Sahifa</div>
                </PlayerNamesContainer>
            </PlayersContainer>
        </Card>
    )

}

export default PlayersCard