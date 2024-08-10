import PropTypes from "prop-types";
import React, { Component } from "react";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default class Main extends Component {
  static propTypes = { second: "" };

  render() {
    const posts = [
      {
        id: 1,
        title: "Lets do it",
        body: "we will do it very well",
      },
      {
        id: 2,
        title: "what to write",
        body: "i have alot to write but we will do it very well",
      },
      {
        id: 3,
        title: "Thats fine",
        body: "cool we did it and we will do it very well",
      },
      {
        id: 4,
        title: "Thats amazing",
        body: "Yes we are great we will do it very well",
      },
    ];
    const postList = posts.map((post) => {
      return <Posts key={post.id} title={post.title} content={post.body} />;
    });
    return (
      <>
        <div className="container">
          <div className="main">
            {postList}
            {/* <Posts
              title="Traveling to Turkey"
              content="This post is about traveling to turkey these days..."
            /> */}
            {/* <Posts
              title="Traveling to Spain"
              content="how to travel to spain in the chpeast way?"
            />
            <Posts
              title="Traveling to Sydney"
              content="can you fly to sydney in 1 hour :D "
            />
            <Posts
              title="Traveling to Syria"
              content="who will travel to syria and come back alive?"
            />
            <Posts
              title="Traveling to Baby"
              content="who will travel to syria and come back alive?"
            > */}
          </div>

          <div className="sideBar">
            <Sidebar />
          </div>
        </div>
      </>
    );
  }
}
