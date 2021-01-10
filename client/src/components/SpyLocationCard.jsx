import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

import { getAllLocations } from "../images/util";

const StyledText = styled.div`
  text-transform: uppercase;
  text-align: center;
  padding: 10px 0px 10px 0px;
  font-weight: 600;
  color: ${props => props.selected === true ? 'black' : 'white'};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: ${props => props.selected ? "line-through": ""};
  &:hover {
    opacity: 1.6;
    text-decoration: line-through;
  }
`;

const ImageContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  flex-shrink: 1;
  margin-bottom: 5px;
  position: relative;
  text-align: center;
  &:hover {
    cursor: pointer;
    opacity: 0.6
  }
`;

const StyledImage = styled.img`
  width: auto;
  height: 250px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
`;

const SpyLocationCard = () => {
  const [locationList, setLocationList] = useState(getAllLocations())

  const selectLocation = (index) => {
    let newLocationList = locationList
    newLocationList[index].selected = !newLocationList[index].selected      
    setLocationList([...newLocationList])
  }

  return (
    <Card height="100%" width="350px" color="#262626" overflowY="scroll">
      {locationList.map((location, index) => (
        <ImageContainer key={location.name} onClick={() => selectLocation(index)}>
            <ImageOverlay/>
            <StyledImage src={location.image} />
            <StyledText selected={location.selected}>{location.name}</StyledText>
        </ImageContainer>
      ))}
    </Card>
  );
};

export default SpyLocationCard;
