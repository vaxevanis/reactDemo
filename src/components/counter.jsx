import React, { Component } from "react";

class Counter extends Component {
  //lifecycle: has updated
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log('making ajax call');
      //get new data from the server
    }

  }
  //lifecycle: Will Unmount
  componentWillUnmount() {
    console.log('App-Ummount')
    //here we should clean timer and listeners so we dont have memory leaks
  }
  render() {
    // lifecycle: render
    console.log('Counter - Rendered'); 

    let classes = this.getBadgeClasses();
    return (
      <div>
        {/* counter title */}
        {this.props.children}
        <div className="col-lg-6 Counter">
          <div className="input-group">
            <span className={classes}>{this.formatCount()}</span>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-primary btn-sm m-2"
            >
              <span className="oi oi-plus" />
            </button>
            <button
              //raising event
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              <span className="oi oi-trash" />
            </button>
          </div>
        </div>
      </div>
    );
  } //render

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const counter = this.props.counter.value; //object destructuring
    return counter === 0 ? 0 : counter;
  }
}

export default Counter;
