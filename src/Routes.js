import Login from "./containers/Login";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Comparator from "./containers/Comparator";
import Gallery from "./containers/Gallery";
import Descriptions from "./containers/Descriptions"

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/comparator" exact component={Comparator} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/descriptions" exact component={Descriptions} />
    </Switch>
  );
}