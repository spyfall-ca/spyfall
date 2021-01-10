import React from "react";
import styled from "styled-components";

import Card from "./Card";

const StyledButton = styled.div`
  opacity: 0.9;
  &:hover {
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? "0.9" : "1")};
  }
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  text-align: center;
  font-weight: 100;
  pointer-events: ${(props) => (props.disabled === true ? "none" : "")};
  height: ${props => props.height ? props.height : ''};
`;

const Button = ({ children, color, onClick, disabled, textColor, fontSize, padding, height }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} textColor={textColor} height={height}>
      <Card color={disabled ? "#808080" : color} fontSize={fontSize} padding={padding} height={height}>
        {children}
      </Card>
    </StyledButton>
  );
};

export default Button;
