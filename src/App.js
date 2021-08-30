import Intro from "./Intro";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overlay from "./Overlay";
import { useSocket } from "./useSocket";
import Control from "./Control";

export default function App() {
  const { data, modifyData } = useSocket("publicRoom");
  return (
    <Router>
      <Switch>
        <Route path="/intro">
          <Intro data={data} />
        </Route>
        <Route path="/overlay">
          <Overlay data={data} />
        </Route>
        <Route path="/control">
          <Control data={data} onModify={modifyData} />
        </Route>
        <Route path="/">
          <div>Hello</div>
        </Route>
      </Switch>
    </Router>
  );
}
