import React, { Component } from "react";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Usuf",
    };
  }

  render() {
    return <div>Parent</div>;
  }
}
export default Parent;
