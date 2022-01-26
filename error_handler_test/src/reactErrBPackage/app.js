import React from "react";
import Person from "./Person";
import Clickcounter from "./Clickcounter";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.person = {
      firstName: "Bruce",
      lastName: "Wayne",
    };
  }

  render() {
    return (
      <div>
        <ErrorBoundary type="cool">
          <Person person={this.person} />
        </ErrorBoundary>

        <ErrorBoundary type="p2">
          <Person person={{}} />
        </ErrorBoundary>
        <Clickcounter />
      </div>
    );
  }
}

export default App;
