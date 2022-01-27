import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage";
import TubeLinePage from "./components/tubeLinePage";
import TubeLineDetailsPage from "./components/tubeLineDetailsPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/travel">
            <TubeLinePage />
          </Route>
          <Route path="/traveldetails">
            <TubeLineDetailsPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
