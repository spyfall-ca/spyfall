import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Card from "./Card";

const StyledTitleText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const StyledParagraphText = styled.div`
  font-size: 14px;
`;

const RulesCard = () => {
  return (
    <Card color="#FDF292">
      <div style={{ flexDirection: "row", display: "flex" }}>
        <FontAwesomeIcon icon={faThumbtack} size="xs" style={{ marginRight: 8}} />
        <StyledTitleText>rules:</StyledTitleText>
      </div>
      <br />
      <StyledParagraphText>
        There are two types of players, characters and spies. All characters
        will be sent to the same location with a unique role, while the spies
        receive no information.
      </StyledParagraphText>
      <br />
      <StyledParagraphText>
        The host picks a player and poses a question, then the player who
        answered must pick another player to ask a question, and so forth.
      </StyledParagraphText>
      <br />
      <StyledParagraphText>
        Characters win the game if they are able to collectively decide who the
        spy is. If they are wrong, the spies take the game.
      </StyledParagraphText>
      <br />
      <StyledParagraphText>
        If the spies guess the correct location before the time limit, they win
        the game.
      </StyledParagraphText>
    </Card>
  );
};

export default RulesCard;
