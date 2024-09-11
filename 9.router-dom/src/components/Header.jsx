import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="about">
        About
      </Link>
      <Link className="link" to="/products">
        Products
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Header;
