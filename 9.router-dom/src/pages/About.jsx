import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link to="employee">Employee</Link>
      <Link to="company">Company</Link>
    </div>
  );
}

export default About;
