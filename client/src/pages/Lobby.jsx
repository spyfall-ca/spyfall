import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Lobby = () => {
  const [room, setRoom] = useState({})
  const history = useHistory();

  socket.on('roomChange', (room) => {
    setRoom(room)
  })

  return (
    <div>
      <p>Lobby</p>
      {room.players.map((player) => <p>player</p>)}
      <button onClick={() => history.push('/game')}>Start</button>
    </div>
  );
};

export default Lobby;

// if new player joins broadcast to everyone that player joined
// if player leaves broadcast that player left