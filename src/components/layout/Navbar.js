import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignedInLinks";
import SignOutLinks from "./SignOutLinks";

function Navbar() {
  return (
    <>
      <nav className="nav-wrapper grey darken-3 text-decoration-none">
        <div className="container">
          <Link to="/" className="brand-logo">
            Plan-Planner
          </Link>
          <SignInLinks />
          <SignOutLinks />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
