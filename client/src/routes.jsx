import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Game from './pages/Game'
import Home from './pages/Home'
import Lobby from './pages/Lobby'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/lobby" component={Lobby} />
      </Switch>
    </Router>
  );
}
