import React, { useState, useEffect } from "react";
import { initiateSocket } from "./sockets";
import Lobby from "./pages/Lobby";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Title from "./components/Title"
import styled, { css } from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(initiateSocket());
  }, []);

  socket &&
    socket.on("joinRoomSuccess", (boolean) => {
      setJoinedRoom(boolean);
    });

  return (
    <div>
      <Navbar socket={socket} />
      <ContentContainer>
        <Title />
        {joinedRoom ? <Lobby /> : <Home socket={socket} />}
      </ContentContainer>
    </div>
  );
};

export default App;
