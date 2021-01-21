import { Component } from "react";
import React from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }

  componentDidMount = () => console.log("mounting...");

  increment = () => {
    console.log("Increment");
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    console.log("Decrement");
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
