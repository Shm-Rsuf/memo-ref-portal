import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Usuf",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        firstName: "Tumpa",
      });
    }, 1000);
  }

  render() {
    console.log("Parent");
    return (
      <div>
        <Child firstName={this.state.firstName} />
      </div>
    );
  }
}
export default Parent;
