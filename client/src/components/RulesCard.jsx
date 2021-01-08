import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Card from "./Card";
import Button from "./Button";

const StyledTitleText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const StyledParagraphText = styled.div`
  font-size: 14px;
`;

const RulesCard = ({ isModal, showModal, setShowModal }) => {
  return (
    <Card color="#FDF292">
      {isModal === true ? (
        <FontAwesomeIcon
          icon={faTimes}
          size="xs"
          style={{ float: "right" }}
          onClick={() => setShowModal(!showModal)}
        />
      ) : (
        ""
      )}
      <div style={{ flexDirection: "row", display: "flex" }}>
        <FontAwesomeIcon
          icon={faThumbtack}
          size="xs"
          style={{ marginRight: 8 }}
        />
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

const StyledModal = styled.div`
  position: fixed;
  width: 35%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: ${(props) => (props.showModal ? "block" : "none")};
`;

export const RulesButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <StyledModal showModal={showModal}>
        <RulesCard
          isModal={true}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </StyledModal>
      <Button
        color="#FDF292"
        textColor="black"
        onClick={() => setShowModal(!showModal)}
      >
        rules
      </Button>
    </div>
  );
};

export default RulesCard;
