import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./Search.module.css";

const SearchBox = () => {
  return (
    <div className={classes.search_container}>
      <FontAwesomeIcon
        icon={faSearch}
        className={classes.form_control_feedback}
      />
      <input type="text" className={classes.form_control} placeholder="" />
    </div>
  );
};

export default SearchBox;
