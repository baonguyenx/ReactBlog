import React from "react";
import sidebar from "./sidebar.js";
import container from "./container.js"



class App extends React.Component {
  render() {
    return (
      <div>
        <div className="sidebar"><sidebar /></div>
        <div className="container"><container /></div>
      </div>
    );
  }
}

module.exports = App;
