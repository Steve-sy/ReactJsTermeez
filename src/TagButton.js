import React, { Component } from "react";

class TagButton extends Component {
  render() {
    return (
      <div>
        <button type="button" class="myButton">
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default TagButton;
