import "./App.css";
import "./Page2.js";
import image1 from "./Peanut-Butter-Banana-Smoothie.jpg";
import React, { Component } from "react";

//ChildB component
class ChildB extends React.Component {
  render() {
    var handleToUpdate = this.props.handleToUpdate;
    return (
      <div>
        <button onClick={() => handleToUpdate("someVar")}>Push me</button>
      </div>
    );
  }
}

//ParentA component
class App extends React.Component {
  constructor(props) {
    super(props);
    var handleToUpdate = this.handleToUpdate.bind(this);
    var arg1 = "";
  }

  handleToUpdate(someArg) {
    alert("We pass argument from Child to Parent: " + someArg);
    this.setState({ arg1: someArg });
  }

  render() {
    var handleToUpdate = this.handleToUpdate;

    return (
      <div>
        <ChildB handleToUpdate={handleToUpdate.bind(this)} />
      </div>
    );
  }
}


export default App;
