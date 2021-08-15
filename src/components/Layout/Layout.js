import { Fragment } from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <div className={`container ${classes.navigation}`}>
        <Navigation />
      </div>
      <main className={`${classes.main} container`}>
        <div>{props.children}</div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
