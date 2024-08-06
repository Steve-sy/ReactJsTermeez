import React, { Component } from "react";
import "./MyFirstComponent.css";

export default class MyFirstComponent extends Component {
  render() {
    return (
      <>
        <div className={"redbg"}>
          I'm {this.props.person.name} and I'm {this.props.person.age} years old
        </div>
        <h3 className={"active"}>Hello From MyFirstComponent</h3>
        <h2 className={"wrong"}>Hello From The other world!</h2>
      </>
    );
  }
}
