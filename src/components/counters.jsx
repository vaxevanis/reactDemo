import React, { Component } from "react";
import Counter from "./counter";
import Toggle from "./toggle";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 1 }
    ],
    themeclass: 0
  };

  // Event Handler
  handleDelete = counterId => {
    console.log("Event handler called", counterId);
    //create new array and filter out the deleted element
    const counters = this.state.counters.filter(c => c.id !== counterId);
    //update the state
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleSwitch = () => {
    console.log("switch handler called");
    //create new array and filter out the deleted element
    //update the state
    this.state.themeclass === 0
      ? this.setState({ themeclass: 1 })
      : this.setState({ themeclass: 0 });
  };
  counterStyles = {
    fontSize: 16,
    color: "grey"
  };
  render() {
    let classes = this.getThemeClasses();
    return (
      <div className={classes}>
        <div className="container">
          <div className="form-group">
            <button
              onClick={this.handleReset}
              className="btn btn-primary btn-sm m-2"
            >
              reset
            </button>
            {this.state.counters.map(counter => (
              <Counter
                key={counter.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                //includes all props of the object
                counter={counter}
              >
                <h4 style={this.counterStyles}>Counter #{counter.id}</h4>
              </Counter>
            ))}
          </div>
          <div className="float-right">
            <Toggle onClickbtn={this.handleSwitch} />
          </div>
        </div>
      </div>
    );
  }
  getThemeClasses() {
    let classes = "theme-";
    classes += this.state.themeclass === 0 ? "white" : "dark";
    return classes;
  }
}

export default Counters;
