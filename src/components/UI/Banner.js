import { Link } from "react-router-dom";
import classes from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div className={`row ${classes.banner}`}>
      <div
        className={`col-lg-4 col-md-3 col-sm-3 col-2 ${classes.left_content}`}
      ></div>
      <div
        className={`col-lg-8 col-md-9 col-sm-9 col-10 ${classes.right_content}`}
      >
        <div className={classes.banner_container}>
          <p className={classes.subtitle}>Subtitle</p>
          <h1 className={classes.title}>Banner for the website</h1>
          <Link to="" className={classes.read_more}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
