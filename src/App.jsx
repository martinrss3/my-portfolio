import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Scene1 } from "./components/Scene1";
import { Scene2 } from "./components/Scene2";
import { ErrorCv } from "./components/ErrorCv";
import { Scene3 } from "./components/Scene3";
import { SceneUnnumbered } from "./components/SceneUnnumbered";

import "../src/css/main.css";

function App() {
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
  }, []);

  return (
    <Router>
      <div className="app" ref={(el) => (app = el)}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Scene1 />
          </Route>
          <Route exact path="/scene2">
            <Scene2 />
          </Route>
          <Route exact path="/scene3">
            <Scene3 />
          </Route>
          <Route exact path="/sceneUnnumbered">
            <SceneUnnumbered />
          </Route>
          <Route exact patch="/error-cv">
            <ErrorCv />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
