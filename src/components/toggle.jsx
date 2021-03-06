import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
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
    let btnClass = this.getToggleStyle();
    return (
      <button
        onClick={event => {
          this.props.onClickbtn();
          this.handleClick();
        }}
        className={btnClass}
      >
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
  getToggleStyle() {
    let btnclass = "btn btn-";
    btnclass += this.state.isToggleOn ? "dark" : "secondary";
    return btnclass;
  }
}

export default Toggle;
