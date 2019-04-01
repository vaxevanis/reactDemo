import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div className="container">
        <div className="col-lg-6 Counter">
          <div className="input-group">
            <span>{this.formatCount()}</span>
            <button className="btn btn-primary">Increment</button>
          </div>
          <div className="input-group">
            <span>{this.formatCount()}</span>
            <button className="btn btn-primary">Increment</button>
          </div>
          <div className="input-group">
            <span>{this.formatCount()}</span>
            <button className="btn btn-primary">Increment</button>
          </div>
        </div>
      </div>
    );
  } //render

  formatCount() {
    const counter = this.state.count; //object destructuring
    const x = <h1>Zero</h1>; // jsx expression example
    return counter === 0 ? x : counter;
  }
}

export default Counter;
