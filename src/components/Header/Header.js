import React from "react";
import SiteNav from "./SiteNav";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <SiteNav />
    </div>
  );
};

export default Header;
