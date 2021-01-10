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

const StyledCloseDiv = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;

const RulesCard = ({ isModal, showModal, setShowModal }) => {
  return (
    <Card color="#FDF292" height="100%">
      {isModal === true ? (
        <StyledCloseDiv>
          <FontAwesomeIcon
            icon={faTimes}
            size="xs"
            style={{ float: "right" }}
            onClick={() => setShowModal(!showModal)}
          />
        </StyledCloseDiv>
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
  width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: ${(props) => (props.showModal ? "block" : "none")};
`;

const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 2;
  left: 0;
  opacity: 0.6;
  background: rgba(0, 0, 0, 0.6);
`;

export const RulesButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <div style={{height: '100%'}}>
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
          height="100%"
        >
          rules
        </Button>
      </div>
    {showModal && <ModalOverlay />}
    </React.Fragment>
  );
};

export default RulesCard;
