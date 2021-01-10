import React from "react";
import styled from "styled-components";
import Card from "./Card";

import { getLocationImage } from '../images/util'

const StyledText = styled.div`
  text-transform: uppercase;
  text-align: center;
  padding: 10px 0px 10px 0px;
  font-weight: 600;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  flex-shrink: 1;
`;

const StyledImage = styled.img`
width: auto;
height: 250px;
`;

const PlayerLocationCard = ({ gameData }) => {

  const locationImage = getLocationImage(gameData.image)

  return (
    <Card height="100%" width="350px">
      <ImageContainer>
        <StyledImage src={locationImage}/>
      </ImageContainer>
      <StyledText>{gameData.location}</StyledText>
    </Card>
  );
};

export default PlayerLocationCard;
