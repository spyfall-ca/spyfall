import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Card from "./Card";

const CardContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  justify-content: space-between;
`;

const ClickableContainer = styled.div`
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  height: 100%;
`;

const copyToClipboard = (text) => {
  const ta = document.createElement("textarea");
  ta.innerText = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  ta.remove();
};

const RoomCodeCard = ({ gameData }) => {
  const [color, setColor] = React.useState('#FED1FF')
  const [icon, setIcon] = React.useState(faCopy)

  const handleCopy = () => {
    copyToClipboard(gameData.host)
    setColor('#CCFFAD')
    setIcon(faCheck)
    setTimeout(() => {
        setColor('#FED1FF')
        setIcon(faCopy)
    }, 1000);
  }
  return (
    <ClickableContainer onClick={() => handleCopy()}>
        <Card color={color} height="100%">
            <CardContainer>
                <div>{gameData.host}</div>
                <FontAwesomeIcon
                    icon={icon}
                    size="xs"
                    style={{ marginLeft: 5 }}
                />
            </CardContainer>
        </Card>
    </ClickableContainer>
  );
};

export default RoomCodeCard;
