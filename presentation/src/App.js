import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceLandingPage from "demos/ServiceLandingPage";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <Router>
      <Switch>
        <Route path="/">
          <ServiceLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}