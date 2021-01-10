import React, { useState, useEffect } from "react";
import { initiateSocket } from "./sockets";
import Lobby from "./pages/Lobby";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Title from "./components/Title";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  min-height: calc(100vh - 84px);
  margin-bottom: 20px;
`

const App = () => {
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [socket, setSocket] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [showInProgressModal, setShowInProgressModal] = useState(false);

  useEffect(() => {
    setSocket(initiateSocket());
  }, []);

  if (socket) {
    socket.on("joinRoomSuccess", (boolean) => {
      if (gameData && gameData.inProgress) {
        setShowInProgressModal(true);
      }
      setJoinedRoom(boolean);
    });
    socket.on("sendGameState", (gameState) => {
      setGameData(gameState);
    });
  }

  return (
    <React.Fragment>
      <Content>
      <Navbar socket={socket} />
        <ContentContainer>
          <Title />
          {joinedRoom && gameData ? (
            <Lobby
              socket={socket}
              gameData={gameData}
              showInProgressModal={showInProgressModal}
              setShowInProgressModal={setShowInProgressModal}
            />
          ) : (
            <Home socket={socket} />
          )}
        </ContentContainer>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default App;
