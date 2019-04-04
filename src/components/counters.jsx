import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  counterStyles = {
    fontSize: 16,
    color: "grey"
  };

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (

        <div className="form-group">
          <button
            onClick={onReset}
            className="btn btn-primary btn-sm m-2"
          >
            reset
          </button>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              //includes all props of the object
              counter={counter}
            >
              <h4 style={this.counterStyles}>Counter #{counter.id}</h4>
            </Counter>
          ))}
        </div>

    );
  }

}

export default Counters;
