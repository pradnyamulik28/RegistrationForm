import React from "react";
import "./Footer.css";
export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>@Copyright {new Date().getFullYear()} App</p>
      </footer>
    );
  }
}
