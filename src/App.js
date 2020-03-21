import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './screen/Login';
import Dashboard from './screen/Dashboard';

export default function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}