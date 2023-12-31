import React from "react";
import { NavLink, Link } from "react-router-dom";

function SignInLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          BB
        </NavLink>
      </li>
    </ul>
  );
}

export default SignInLinks;
