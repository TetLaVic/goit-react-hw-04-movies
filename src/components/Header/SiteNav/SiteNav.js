import React from "react";
import { NavLink } from "react-router-dom";

const SiteNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>

      {/* <NavLink to="/movies" className={} activeClassName={} /> */}
    </ul>
  );
};

export default SiteNav;
