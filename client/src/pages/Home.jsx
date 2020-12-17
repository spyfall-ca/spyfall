import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { initiateSocket } from '../sockets/Home'

const Home = () => {
  const [roomCode, setRoomCode] = useState('')
  const history = useHistory();

  const createRoom = () => {
    const socket = initiateSocket()
    socket.emit('createRoom')
  }

  const joinRoom = () => {
    const socket = initiateSocket()
    socket.emit('joinRoom', roomCode)
    socket.on('joinRoomSuccess', (boolean) => {
      if (boolean === true) {
        history.push('/Lobby')
      }
    })
  }

  return (
    <div>
      <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)}></input>
      <button onClick={() => joinRoom()}>join</button>
      <button onClick={() => createRoom()}>create room</button>
    </div>
  );
};

export default Home;

/* 
LIST: 

- finish createRoom function
  - initialize the websocket
  - generate unique code
  - redirect if successful
  - error handling

- figure out a way to store the codes and socketIDs?? 

- create and finish joinRoom function
  - join someone else's room based on code
  - redirect if successful
  - error handling

  -Home page (no sockets here)
  -Lobby page /lobby/:roomcode
  -Lobby page mounts -> roomcode from the url and we initialze socket and search for it, if
   it doesnt exist route back to home and if it does we initialzie eveything
  -Create room and it routes to lobby page
*/