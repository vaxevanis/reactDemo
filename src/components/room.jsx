import React, { Component } from "react";

class Room extends Component {
  state = {
    value: this.props.room.value
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
      <div className="col-md-4">
        {/* room title */}
        {this.props.children}
        <div>
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="rounded "
          />
        </div>
        <div className="rooms">
          <div className="input-group">
            <span className="m-2">Nights</span>
            <span className={classes}>{this.formatCount()}</span>
            <button
              onClick={product => this.handleIncrement(product)}
              className="btn btn-primary btn-sm m-2"
            >
              <span className="oi oi-plus" />
            </button>
            <button
              //raising event
              onClick={() => this.props.onDelete(this.props.room.rm_code)}
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const counter = this.state.value; //object destructuring
    return counter === 0 ? 0 : counter;
  }
}

export default Room;
