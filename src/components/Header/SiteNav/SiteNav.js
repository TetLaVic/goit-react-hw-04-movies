import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";

const SiteNav = () => {
  return (
    <ul className={styles.SiteNav}>
      <li className={styles.SiteNavLink}>
        <NavLink
          to="/"
          exact
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.SiteNavLink}>
        <NavLink
          to="/movies"
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default SiteNav;
