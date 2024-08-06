import PropTypes from "prop-types";
import React, { Component } from "react";
import TagButton from "./TagButton";

export default class Sidebar extends Component {
  static propTypes = { second: "" };

  render() {
    return (
      <>
        <div className="">
          <TagButton />
          <TagButton />
          <TagButton />
          <TagButton />
          <TagButton />
        </div>
      </>
    );
  }
}
