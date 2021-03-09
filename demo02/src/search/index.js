"use strict";

// import React from "react";
// import ReactDOM from "react-dom";
import "./search.less";
import avator from "./images/avator.png";

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        Search Text000000000
        <img src={avator} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
