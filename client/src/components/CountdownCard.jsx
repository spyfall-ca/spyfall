import React, { useState, useEffect } from "react";
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
  const [startTime] = useState(Date.now())
  const [timer, setTimer] = useState(480);

  useEffect(() => {
    const countDownTimer = setInterval(() => {
      if(timer > 0) {
        setTimer(480 - Math.floor((Date.now() - startTime)/1000))
      } else {
        clearInterval(countDownTimer)
      }
    }, 1000)

    return () => clearInterval(countDownTimer)
  }, [timer, startTime])

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    let secondString = ("0" + seconds).slice(-2);
    let dateString = minutes + ":" + secondString;
    return dateString
  };

  return (
    <Card height= "100%" color={timer === "0:00" ? "#FF9E9E" : "#FFD179"}>
      <CardContainer>
        <FontAwesomeIcon icon={faClock} size="xs" style={{ marginRight: 5 }} />
        <div>{formatTime(timer)}</div>
      </CardContainer>
    </Card>
  );
};

export default CountdownCard;
