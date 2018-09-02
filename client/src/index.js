import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { registerObserver } from "react-perf-devtool";

const options = {
  shouldLog: true,
  port: 8181,
  timeout: 12000,
  components: ["App"] // Load the extension after 12 sec.
};

/**
 *
 * @param {string} measures
 */
function callback(measures) {
  // do something with the measures
}

registerObserver(options, callback);

ReactDOM.render(<App />, document.getElementById("root"));
