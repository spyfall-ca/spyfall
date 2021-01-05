import React from "react";
import styled, { css } from "styled-components";

const NavbarContainer = styled.div`
  background-color: #464646;
  display: flex;
  align-items: center;
`;

const NavbarButtonContainer = styled.div`
  margin-right: 15%;
  margin-left: 15%;
  padding: 12px 0px 12px;
  display: flex;
`;

const NavigationButton = styled.div`
  color: white;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <NavbarButtonContainer>
        <NavigationButton onClick={() => props.socket.emit('leaveGame')}>home</NavigationButton>
      </NavbarButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
