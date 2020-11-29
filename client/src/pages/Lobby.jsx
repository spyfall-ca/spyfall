import React from "react";
import { useHistory } from "react-router-dom";

const Lobby = () => {
  const history = useHistory();
  return (
    <div>
      <p>Lobbdy</p>
      <button onClick={() => history.push('/game')}>Start</button>
    </div>
  );
};

export default Lobby;
