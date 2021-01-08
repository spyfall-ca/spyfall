import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  box-shadow: ${(props) =>
    props.hideShadow ? "" : "0px 5px 6px rgba(0, 0, 0, 0.15)"};
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : "12px")};
  background: ${(props) => (props.color ? props.color : "white")};
  transition: all 0.1s ease;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  height: ${(props) => (props.height ? props.height : "")};
  overflow-y: ${(props) => (props.overflowY ? props.overflowY : "")};
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => (props.color ? props.color : "#f1f1f1")};
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Card = ({
  children,
  color,
  hideShadow,
  padding,
  height,
  overflowY,
  fontSize,
}) => {
  return (
    <CardStyle
      color={color}
      hideShadow={hideShadow}
      padding={padding}
      height={height}
      overflowY={overflowY}
      fontSize={fontSize}
    >
      {children}
    </CardStyle>
  );
};

export default Card;
