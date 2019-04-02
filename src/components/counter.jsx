import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };
  counterStyles = {
    fontSize: 10,
    color: "yellow"
  };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    // if (this.state.tags.length === 0) return "no tags here";
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //using arrow function to bind event handlers
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    let classes = this.getBadgeClasses();
    return (
      <div className="container">
        <div className="col-lg-6 Counter">
          <div className="input-group">
            <span className={classes}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-primary">
              Increment
            </button>
            {/* //conditional rendering (&& in js checks for truthy or falsy, text is always truthy)  */}
            {this.state.tags.length === 0 && "No tags Here"}
            {this.renderTags()}
          </div>
        </div>
      </div>
    );
  } //render

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const counter = this.state.count; //object destructuring
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
