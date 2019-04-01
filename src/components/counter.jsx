import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  counterStyles = {
    fontSize: 10,
    color: "yellow"
  };
  render() {
    return (
      <div className="container">
        <div className="col-lg-6 Counter">
          <div className="input-group">
            <span
              style={this.counterStyles}
              className="badge badge-primary m-2"
            >
              {this.formatCount()}
            </span>
            <button className="btn btn-primary">Increment</button>
          </div>
          <div className="input-group">
            <span style={{ fontSize: 20 }} className="badge badge-primary m-2">
              {this.formatCount()}
            </span>
            <button className="btn btn-primary">Increment</button>
          </div>
          <div className="input-group">
            <span className="badge badge-primary m-2">
              {this.formatCount()}
            </span>
            <button className="btn btn-primary">Increment</button>
          </div>
        </div>
      </div>
    );
  } //render

  formatCount() {
    const counter = this.state.count; //object destructuring
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
