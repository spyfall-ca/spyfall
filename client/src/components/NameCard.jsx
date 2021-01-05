import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Card from "./Card";

const MainContainer = styled.div``;

const CardContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  justify-content: center;
`;

const NameCard = () => {
  return (
    <MainContainer>
      <Card color="#C8FFF2">
        <CardContainer>
          <FontAwesomeIcon
            icon={faPencilAlt}
            size="xs"
            style={{ marginRight: 5 }}
          />
          <div>BillyBobJoe</div>
        </CardContainer>
      </Card>
    </MainContainer>
  );
};

export default NameCard;
