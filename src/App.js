import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Toggle from "./components/toggle";
import "./App.css";


class App extends Component {

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
  render() {
    let themename = this.getThemeClasses();
    return (
      <React.Fragment>
        <div className={themename}>
          <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
          </main>
          </div>
        <footer className="fixed-bottom">
        <div className="container-fluid text-right">
          <Toggle onClickbtn={this.handleSwitch} />
          </div>
        </footer>
      </React.Fragment>
    );
  }
  getThemeClasses() {
    let classes = "theme-";
    classes += this.state.themeclass === 0 ? "light" : "dark";
    return classes;
  }
}

export default App;
