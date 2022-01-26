import React from "react";
import LogList from "./LogList";
import { connect } from "react-redux";
import { consoleLog } from "../actions";

class App extends React.Component {
  render() {
    this.props.consoleLog("[App]: rendering app");
    return (
      <div className="App">
        <header className="App-header">
          <p>MY Stuff</p>
        </header>
        <button
          onClick={() => {
            this.props.consoleLog("Logging String");
          }}
        >
          Add String log
        </button>

        <button
          onClick={() => {
            this.props.consoleLog([1, 2, "3", 4]);
          }}
        >
          Add Array log
        </button>

        <button
          onClick={() => {
            this.props.consoleLog({
              obj: {
                test: 242,
              },
            });
          }}
        >
          Add Object Log
        </button>
        <LogList></LogList>
      </div>
    );
  }
}

export default connect(null, {
  //actions
  consoleLog,
})(App);
