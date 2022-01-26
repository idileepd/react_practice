import React, { Component } from "react";

export default class Person extends Component {
  render() {
    return (
      <div>
        {/* Hello {this.props.pers.x.y} */}
        Hello {this.props.person.firstName.toUpperCase()}
        {this.props.person.lastName}
      </div>
    );
  }
}
