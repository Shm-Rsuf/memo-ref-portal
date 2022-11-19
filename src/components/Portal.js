import React from "react";
import ReactDOM from "react-dom";

export default function Portal() {
  return ReactDOM.createPortal(
    <h2>I am appering in root2</h2>,
    document.getElementById("root2")
  );
}
