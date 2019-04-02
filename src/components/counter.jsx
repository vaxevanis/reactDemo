import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };
  counterStyles = {
    fontSize: 10,
    color: "yellow"
  };
  renderTags() {
    if (this.state.tags.length === 0) return "no tags here";
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    let classes = this.getBadgeClasses();
    return (
      <div className="container">
        <div className="col-lg-6 Counter">
          <div className="input-group">
            <span className={classes}>{this.formatCount()}</span>
            <button className="btn btn-primary">Increment</button>
            {this.renderTags()}
          </div>
          <div className="input-group">
            <span className={classes}>{this.formatCount()}</span>
            <button className="btn btn-primary">Increment</button>
          </div>
          <div className="input-group">
            <span className={classes}>{this.formatCount()}</span>
            <button className="btn btn-primary">Increment</button>
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
