import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      btnclass: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      btnclass: this.state.btnclass === 0 ? 1 : 0
    }));
  }

  render() {
    let themeClass = this.getTheme();
    return (
      <button onClick={this.handleClick} className={themeClass}>
        {this.state.isToggleOn ? "On" : "OFF"}
      </button>
    );
  }
  getTheme() {
    let themeClass = "btn btn-";
    themeClass += this.state.btnclass === 0 ? "success" : "danger";
    return themeClass;
  }
}

export default Toggle;
