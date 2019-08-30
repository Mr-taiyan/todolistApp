import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Selection from "./Selection";
import { Router, Link } from "@reach/router";

const App = () => {
  return (
    <div>
      <Router>
        <Selection path="/" />
      </Router>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
