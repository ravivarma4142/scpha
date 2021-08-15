import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, Dropdown, DropdownButton } from "react-bootstrap";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const pages = [
    { pageLabel: "Home", url: "/" },
    { pageLabel: "Add Tasks", url: "/add-tasks" },
    { pageLabel: "Tasks", url: "/tasks" },
    { pageLabel: "Dummy", url: "/" },
  ];

  const navigationLg = pages.map((eachPage, index) => {
    return (
      <Nav.Link key={index} as={NavLink} to={eachPage.url}>
        {eachPage.pageLabel}
      </Nav.Link>
    );
  });

  const navigationSm = pages.map((eachPage, index) => {
    return (
      <Dropdown.Item
        key={index + "a"}
        as={Link}
        to={eachPage.url}
        className={classes.border_bottom}
      >
        {eachPage.pageLabel}
      </Dropdown.Item>
    );
  });

  return (
    <Fragment>
      <div className="d-lg-flex d-none">{navigationLg}</div>
      <DropdownButton
        id="dropdown-item-button"
        className="d-lg-none"
        title="Menu"
        align="end"
        variant="light"
      >
        {navigationSm}
      </DropdownButton>
    </Fragment>
  );
};

export default Navigation;
