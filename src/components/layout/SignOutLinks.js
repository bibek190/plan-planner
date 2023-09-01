import React from "react";
import { NavLink, Link } from "react-router-dom";

function SignOutLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/">Log In</NavLink>
      </li>
    </ul>
  );
}

export default SignOutLinks;
