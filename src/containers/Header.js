import React from "react";
import { connect } from "react-redux";

const Header = () => (
  <header className="header">
    <h1>admin.name</h1>
  </header>
);

export default connect(
  null,
  {}
)(Header);
