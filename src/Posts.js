import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Posts extends Component {
  static propTypes = { second: "" };

  render() {
    return (
      <>
        <div className="post">
          <h2>This is a post</h2>
          <hr />
          <p>this is the whole content for this post!</p>
        </div>
      </>
    );
  }
}
