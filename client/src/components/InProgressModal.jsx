import React from "react";
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

export const InProgressModal = ({ showModal, setShowModal }) => {
  return (
    <React.Fragment>
      <div>
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
            <StyledTitleText> hey there! </StyledTitleText>
            <StyledParagraphText>
              game is in progress, wait for a new game to start!
            </StyledParagraphText>
            <Button
              color="#99E33B"
              onClick={() => setShowModal(false)}
              fontSize="15px"
            >
              okay
            </Button>
          </Card>
        </StyledModal>
      </div>
      {showModal && <ModalOverlay />}
    </React.Fragment>
  );
};

export default InProgressModal;
