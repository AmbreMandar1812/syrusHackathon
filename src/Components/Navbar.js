import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <p>Scholar Space </p>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/members-list">Members</Link>
          </li>
          <li>
            <Link to="/proposals">Proposals</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
