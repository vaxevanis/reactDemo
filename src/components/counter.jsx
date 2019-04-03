import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //using arrow function to bind event handlers
  handleIncrement = product => {
    // console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  //Helper Method for passing an argument to event handlers
  // doHandleIncrement = product => {
  //   this.handleIncrement(product);
  // };
  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        {/* counter title */}
        {this.props.children}
        <div className="col-lg-6 Counter">
          <div className="input-group">
            <span className={classes}>{this.formatCount()}</span>
            <button
              onClick={product => this.handleIncrement(product)}
              className="btn btn-primary"
            >
              Increment
            </button>
            <button
              //raising event
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  } //render

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const counter = this.state.value; //object destructuring
    return counter === 0 ? 0 : counter;
  }
}

export default Counter;
