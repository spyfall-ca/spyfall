import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const InputContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

const FormCardContainer = styled.div`
  min-width: 400px;
`;

const Home = (props) => {
  const [roomCode, setRoomCode] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [error, setErrors] = useState("")
  
  const isPlayerNameValid = () => {
    if (playerName === '') {
        setErrors('Invalid Name')
        return false;
    } else {
        return true;
    }
  }

  const createRoom = () => {
    if (!isPlayerNameValid()) return
    props.socket.emit("createRoom", playerName);
  };

  const joinRoom = () => {
    if (!isPlayerNameValid()) return
    props.socket.emit("joinRoom", roomCode, playerName);
  };

  props.socket && props.socket.on('Error', errorType => {
    setErrors(errorType)
  })

  return (
    <FormCardContainer>
      <Card color="#FFF7B1" padding="30px">
        <InputContainer>
          <div style={{ marginBottom: 25 }}>
            <Input
              label="player name"
              value={playerName}
              onChange={(e) => {
                  if(error === "Invalid Name") setErrors('')
                  setPlayerName(e.target.value)
              }}
              placeholder="BillyBobJoe"
              error={error === "Invalid Name" ? error : ''}
            />
          </div>
          <Input
            label="join a room"
            value={roomCode}
            onChange={(e) => {
                if(error === "Invalid Room ID") setErrors('')
                setRoomCode(e.target.value)}}
            placeholder="M59Ss26jyKu..."
            error={error === "Invalid Room ID" ? error : ''}
          />
        </InputContainer>
        <ButtonContainer>
          <Button color="#7331FF" onClick={() => createRoom()}>
            create room
          </Button>
          <Button color="#FF7272" onClick={() => joinRoom()}>
            join room
          </Button>
        </ButtonContainer>
      </Card>
    </FormCardContainer>
  );
};

export default Home;
