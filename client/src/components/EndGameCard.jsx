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
  width: 25%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: ${(props) => (props.showModal ? "block" : "none")};
`;

export const EndGameCard = ({ socket, gameData }) => {
  const [showModal, setShowModal] = useState(false);

  const handlePlayAgain = () => {
    setShowModal(!showModal);
    socket.emit("startNewGame", false);
  };

  const handleNewGame = () => {
    setShowModal(!showModal);
    socket.emit("leaveGame");
  };

  return (
    <div>
      <StyledModal showModal={showModal}>
        <Card>
          <FontAwesomeIcon
            icon={faTimes}
            size="xs"
            style={{ float: "right" }}
            onClick={() => setShowModal(!showModal)}
          />
          <StyledTitleText> BillyBobJoe was the spy! </StyledTitleText>
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
              onClick={() => handleNewGame()}
              fontSize="15px"
            >
              end game
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
      >
        end game
      </Button>
    </div>
  );
};

export default EndGameCard;
