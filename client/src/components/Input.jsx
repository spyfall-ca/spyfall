import React from "react";
import styled from "styled-components";

const StyledInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  font-size: 15px;
  font-family: Overpass Mono;
  border-radius: 5px;
  border: ${props => props.error ? '1px solid red' : 'none'};
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const StyledLabel = styled.h1`
font-size: 17px;
font-weight: 600;
`

const StyledError = styled.p`
font-size: 12px;
color:red;
`

const Input = ({ placeholder, label, value, onChange, error }) => {
  return (
    <React.Fragment>
        <StyledLabel>
            {label}
        </StyledLabel>
        <StyledInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={error}
        />
        <StyledError>
            {error}
        </StyledError>
    </React.Fragment>
  );
};

export default Input;
