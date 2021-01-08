import React, { useState, useEffect } from "react";
import { initiateSocket } from "./sockets";
import Lobby from "./pages/Lobby";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [socket, setSocket] = useState(null);
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    setSocket(initiateSocket());
  }, []);

  if (socket) {
    socket.on("joinRoomSuccess", (boolean) => {
      console.log(socket)
      setJoinedRoom(boolean);
    })
    socket.on("sendGameState", (gameState) => {
      console.log("GAME STATE", gameState)
      setGameData(gameState);
    })
  }

  return (
    <div>
      <Navbar socket={socket} />
      <ContentContainer>
        <Title />
        {joinedRoom && gameData ? <Lobby socket={socket} gameData={gameData} /> : <Home socket={socket} />}
      </ContentContainer>
    </div>
  );
};

export default App;
