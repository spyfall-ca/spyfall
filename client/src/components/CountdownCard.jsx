import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Card from "./Card";

const CardContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  justify-content: center;
`;

const CountdownCard = ({ socket }) => {
  const [timer, setTimer] = useState("8:00");

  socket.on("countdown", (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    let secondString = ("0" + seconds).slice(-2);
    let dateString = minutes + ":" + secondString;
    setTimer(dateString);
  });

  return (
    <Card color={timer === "0:00" ? "#FF9E9E" : "#FFD179"}>
      <CardContainer>
        <FontAwesomeIcon icon={faClock} size="xs" style={{ marginRight: 5 }} />
        <div>{timer}</div>
      </CardContainer>
    </Card>
  );
};

export default CountdownCard;
