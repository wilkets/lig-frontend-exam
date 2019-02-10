import React from "react";
import Articles from "./Articles";
import Sidebar from "./Sidebar";

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <Articles />
        <Sidebar />
      </div>
    );
  }
}

export default Body;
