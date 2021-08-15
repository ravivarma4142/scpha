import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBox from "../UI/Search";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <Navbar bg="light" className={classes.header} expand="lg">
      <Navbar.Brand as={Link} to="/">
        SCPHA
      </Navbar.Brand>
      <Button variant={`light d-lg-none ${classes.btn_border}`}>Sign Up</Button>
      <Navbar.Collapse
        id="navbarScroll"
        className={`show ${classes.justify_start_end}`}
      >
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
        <div className={`d-flex ${classes.justify_content_between}`}>
          <SearchBox />
          <div className="d-block d-lg-none">
            <Navigation />
          </div>
        </div>
      </Navbar.Collapse>

      <Button variant={`light d-none d-lg-block ${classes.btn_border}`}>
        Sign Up
      </Button>
    </Navbar>
  );
};

export default MainHeader;
