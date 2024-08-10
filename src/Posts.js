import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Posts extends Component {
  static propTypes = { second: "" };

  render() {
    return (
      <>
        <div className="post">
          <h2>{this.props.title}</h2>
          <hr />
          <p>{this.props.content}</p>
          {this.props.children}
        </div>
      </>
    );
  }
}
