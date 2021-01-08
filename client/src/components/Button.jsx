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
`;

const Button = ({ children, color, onClick, disabled, textColor, fontSize, padding }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} textColor={textColor}>
      <Card color={disabled ? "#808080" : color} hideShadow={true} fontSize={fontSize} padding={padding}>
        {children}
      </Card>
    </StyledButton>
  );
};

export default Button;
