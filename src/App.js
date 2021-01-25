import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Write from "./pages/Write";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/write" component={Write} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
