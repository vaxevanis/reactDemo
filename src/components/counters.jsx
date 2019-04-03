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
    ]
  };

  // Event Handler
  handleDelete = counterId => {
    console.log("Event handler called", counterId);
    //create new arraty and filter out the deleted element
    const counters = this.state.counters.filter(c => c.id !== counterId);
    //update the state
    this.setState({ counters: counters });
  };
  counterStyles = {
    fontSize: 16,
    color: "grey"
  };
  render() {
    return (
      <div className="container">
        <div className="form-group">
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              value={counter.value}
              id={counter.id}
            >
              <h4 style={this.counterStyles}>Counter #{counter.id}</h4>
            </Counter>
          ))}
          <div className="float-right">
            <Toggle />
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
