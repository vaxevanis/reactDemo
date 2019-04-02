import React, { Component } from "react";

class ThingsToGet extends Component {
  state = {
    importance: 0,
    tags: ["σουβέρ", "φλυτζάνια", "γραφική ύλη"]
  };
  ThingsToGetStyles = {
    fontSize: 10,
    color: "yellow"
  };
  render() {
    let classes = this.getClasses();
    return (
      <div className="container">
        <div className="input-group">
          <ul>
            {this.state.tags.map(tag => (
              <li className={classes} key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } //render

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.importance === 0 ? "warning" : "primary";
    return classes;
  }
}

export default ThingsToGet;
