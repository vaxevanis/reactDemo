import React, { Component } from "react";
import Room from "./room";
import Toggle from "./toggle";

class Rooms extends Component {
  state = {
    rooms: [
      { rm_code: "DBL", value: 2, name: "Double" },
      { rm_code: "TRP", value: 4, name: "Triple" },
      { rm_code: "SNG", value: 0, name: "Single" },
      { rm_code: "DLX", value: 1, name: "Deluxe Suite" }
    ],
    themeclass: 0
  };

  // Event Handler
  handleDelete = roomcode => {
    console.log("Event handler called", roomcode);
    //create new array and filter out the deleted element
    const rooms = this.state.rooms.filter(c => c.rm_code !== roomcode);
    //update the state
    this.setState({ rooms: rooms });
  };
  handleSwitch = () => {
    console.log("switch handler called");
    //create new array and filter out the deleted element
    //update the state
    this.state.themeclass === 0
      ? this.setState({ themeclass: 1 })
      : this.setState({ themeclass: 0 });
  };
  RmTitleStyles = {
    fontSize: 16,
    color: "grey"
  };
  render() {
    let classes = this.getThemeClasses();
    return (
      <div className={classes}>
        <div className="container">
          <div className="form-group row">
            {this.state.rooms.map(room => (
              <Room
                key={room.rm_code}
                onDelete={this.handleDelete}
                //includes all props of the object
                room={room}
              >
                <h4 style={this.RmTitleStyles}>Room #{room.rm_code}</h4>
              </Room>
            ))}
          </div>
          <footer className="fixed-bottom">
            <div className="float-right">
              <Toggle onClickbtn={this.handleSwitch} status={this.themeclass} />
            </div>
          </footer>
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

export default Rooms;
