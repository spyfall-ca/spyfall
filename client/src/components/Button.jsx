import React from 'react'
import styled from "styled-components";

import Card from './Card'

const StyledButton = styled.div`
  opacity: 0.9;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  color: white;
  text-align: center;
  font-weight: 100;
`;

const Button = ({ children, color, onClick }) => {
    return <StyledButton onClick={onClick}><Card color={color} hideShadow={true}>{children}</Card></StyledButton>
}

export default Button