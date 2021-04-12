import React from "react";
import { Route } from "react-router-dom";

import { HomePage } from "./HomePage";

function App() {
  return <Route exact path="/" component={HomePage} />;
}

export default App;
