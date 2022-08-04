import React, { Fragment } from "react";
import MainNavbar from "./MainNavbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
