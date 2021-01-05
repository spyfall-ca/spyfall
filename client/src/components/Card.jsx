import React from 'react'
import styled from "styled-components";

const CardStyle = styled.div`
    box-shadow: ${props => props.hideShadow ? '': '0px 5px 10px rgba(0, 0, 0, 0.25)'};
    border-radius: 5px;
    padding: ${props => props.padding ? props.padding : '10px'};
    background: ${props => props.color ? props.color : "white"};
`;

const Card = ({ children, color, hideShadow, padding }) => {
    return <CardStyle color={color} hideShadow={hideShadow} padding={padding}>{children}</CardStyle>
}

export default Card