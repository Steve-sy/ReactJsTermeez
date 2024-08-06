import PropTypes from "prop-types";
import React, { Component } from "react";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default class Main extends Component {
  static propTypes = { second: "" };

  render() {
    return (
      <>
        <div className="container">
          <div className="main">
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </div>

          <div className="sideBar">
            <Sidebar />
          </div>
        </div>
      </>
    );
  }
}
