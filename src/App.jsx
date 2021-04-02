import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { CV } from "./components/CV";
import { Scene1 } from "./components/Scene1";
import { Scene2 } from "./components/Scene2";
import { Scene3 } from "./components/Scene3";
import { Scene4 } from "./components/Scene4";
import { Scene5 } from "./components/Scene5";
import { Scene6 } from "./components/Scene6";
import { Scene7 } from "./components/Scene7";
import { Scene8 } from "./components/Scene8";

import "../src/css/main.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 9500);
  });

  return (
    <React.Fragment>
      {isLoading === true ? (
        <Loading />
      ) : (
        <Router>
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
            <Route exact path="/scene4">
              <Scene4 />
            </Route>
            <Route exact path="/scene5">
              <Scene5 />
            </Route>
            <Route exact path="/scene6">
              <Scene6 />
            </Route>
            <Route exact path="/scene7">
              <Scene7 />
            </Route>
            <Route exact path="/scene8">
              <Scene8 />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/cv">
              <CV />
            </Route>
          </Switch>
        </Router>
      )}
    </React.Fragment>
  );
};

export default App;
