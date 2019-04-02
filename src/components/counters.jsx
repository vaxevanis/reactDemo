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
  handleDelete = () => {
    console.log("handle delete");
  };

  render() {
    return (
      <div className="container">
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
        <div className="float-right">
          <Toggle />
        </div>
      </div>
    );
  }
}

export default Counters;
