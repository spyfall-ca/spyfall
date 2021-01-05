import React from 'react'
import styled from "styled-components";

const CardStyle = styled.div`
    box-shadow: ${props => props.hideShadow ? '': '0px 5px 6px rgba(0, 0, 0, 0.15)'};
    border-radius: 5px;
    padding: ${props => props.padding ? props.padding : '12px'};
    background: ${props => props.color ? props.color : "white"};
    transition: all 0.1s ease;
    font-size: 20px;
`;

const Card = ({ children, color, hideShadow, padding }) => {
    return <CardStyle color={color} hideShadow={hideShadow} padding={padding}>{children}</CardStyle>
}

export default Card