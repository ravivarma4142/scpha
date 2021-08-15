import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={`container ${classes.margin_auto}`}>
        <div className="row">
          <div className={`col-lg-6 col-12 ${classes.border_right}`}>
            <h3>SCPHA</h3>
            <strong className="">Latest Blog Post</strong>
            <h5>Ready to get started?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-lg-6 col-12">
            <div className={`row ${classes.right_footer}`}>
              <div className="col-lg-4 col-4"></div>
              <div className={`col-lg-4 col-4 ${classes.text_right}`}>
                <strong>Product</strong>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
              </div>
              <div className={`col-lg-4 col-4 ${classes.text_right}`}>
                <strong>Company</strong>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.text_right}>
          <Link to="/">@2010 - 2020 Privacy - Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
