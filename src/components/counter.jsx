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
            <span>{this.state.count}</span>
            <button className="btn btn-primary">Increment</button>
          </div>
          <div className="input-group">
            <span>{this.state.count}</span>
            <button className="btn btn-primary">Increment</button>
          </div>
          <div className="input-group">
            <span>{this.state.count}</span>
            <button className="btn btn-primary">Increment</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
