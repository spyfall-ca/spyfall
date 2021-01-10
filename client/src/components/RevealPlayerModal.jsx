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

const ButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`;

export const RevealPlayerModal = ({ socket}) => {
  const [showModal, setShowModal] = useState(false);
  const [spyName, setSpyName] = useState('')

  socket.on("revealSpy", (spy) => {
    setSpyName(spy)
    setShowModal(true)
  })

  return (
   <React.Fragment>
      <StyledModal showModal={showModal}>
        <Card>
          <StyledCloseDiv>
            <FontAwesomeIcon
              icon={faTimes}
              size="xs"
              style={{ float: "right" }}
              onClick={() => setShowModal(false)}
            />
          </StyledCloseDiv>
          <StyledTitleText> {spyName} was the spy! </StyledTitleText>
          <ButtonContainer>
            <Button
              color="#7331FF"
              onClick={() => setShowModal(false)}
              fontSize="15px"
              padding="12px 25px 12px 25px"
            >
              okay
            </Button>
          </ButtonContainer>
        </Card>
      </StyledModal>
    {showModal && <ModalOverlay />}
    </React.Fragment>
  );
};

export default RevealPlayerModal;
