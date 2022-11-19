import React, { Component } from "react";

export default class Refarence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Tumpa",
    };

    this.colorChange = React.createRef();
    this.fontChange = React.createRef();
    this.textChange = React.createRef();
  }

  colorHandler = () => {
    this.colorChange.current.style.color = "red";
  };

  fontHandler = () => {
    this.fontChange.current.style.fontSize = "3rem";
  };

  textChangeHandler = () => {
    this.textChange.current.textContent = this.state.firstName;
  };

  render() {
    return (
      <div>
        <h2 ref={this.colorChange}>change color</h2>
        <button onClick={this.colorHandler}>change color</button>

        <h2 ref={this.fontChange}>change font size</h2>
        <button onClick={this.fontHandler}>font change</button>

        <h2 ref={this.textChange}>change text</h2>
        <button onClick={this.textChangeHandler}>text change</button>
      </div>
    );
  }
}
