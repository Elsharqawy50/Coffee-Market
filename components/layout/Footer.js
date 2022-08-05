import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {

  const copyrightYear = new Date().getFullYear();

  return (
    <footer className={`${classes.footer} p-3 text-center`}>
      Copyright © {copyrightYear} Personal Portfolio. All Rights Reserved | Designed By
      Abdelrahman Mohamed.
    </footer>
  );
};

export default Footer;
