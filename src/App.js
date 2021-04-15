import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
