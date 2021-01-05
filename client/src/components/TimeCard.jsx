import React from "react";
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

const TimeCard = () => {
  return (
    <Card color="#FFD179">
        <CardContainer>
            <FontAwesomeIcon
                icon={faClock}
                size="xs"
                style={{ marginRight: 5 }}
            />
            <div>8:00</div>
        </CardContainer>
    </Card>
  );
};

export default TimeCard;
