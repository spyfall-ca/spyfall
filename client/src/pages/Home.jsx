import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <input></input>
      <button onClick={() => history.push("/lobby")}>join</button>
      <button>create room</button>
    </div>
  );
};

export default Home;
