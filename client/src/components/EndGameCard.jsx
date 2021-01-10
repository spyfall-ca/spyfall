import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Card from "./Card";
import Button from "./Button";

const StyledTitleText = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 20px;
`;

const StyledParagraphText = styled.div`
  font-size: 15px;
  margin: 20px;
  font-weight: 600;
`;

const StyledModal = styled.div`
  position: fixed;
  width: 350px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: ${(props) => (props.showModal ? "block" : "none")};
`;

const StyledCloseDiv = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.6;
  background: rgba(0, 0, 0, 0.6);
`;

export const EndGameCard = ({ socket, gameData }) => {
  const [showModal, setShowModal] = useState(false);

  const player = gameData.players.find(player => player.role === "Spy")

  const handlePlayAgain = () => {
    setShowModal(!showModal);
    socket.emit("startNewGame", false);
  };

  return (
   <React.Fragment>
    <div style={{height: '100%'}}>
      <StyledModal showModal={showModal}>
        <Card>
          <StyledCloseDiv>
            <FontAwesomeIcon
              icon={faTimes}
              size="xs"
              style={{ float: "right" }}
              onClick={() => setShowModal(!showModal)}
            />
          </StyledCloseDiv>
          <StyledTitleText> Are you sure? </StyledTitleText>
          <StyledParagraphText>
            would you like to play again?
          </StyledParagraphText>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              margin: 20,
            }}
          >
            <Button
              color="#7331FF"
              onClick={() => setShowModal(false)}
              fontSize="15px"
            >
              cancel
            </Button>
            <Button
              color="#FFC531"
              onClick={() => handlePlayAgain()}
              fontSize="15px"
            >
              play again
            </Button>
          </div>
        </Card>
      </StyledModal>
      <Button
        color="#FF4d35"
        disabled={socket.id === gameData.host ? false : true}
        onClick={() => setShowModal(!showModal)}
        height="100%"
      >
        end game
      </Button>
    </div>
    {showModal && <ModalOverlay />}
    </React.Fragment>
  );
};

export default EndGameCard;
