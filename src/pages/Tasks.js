import { useSelector } from "react-redux";
import classes from "./Tasks.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Tasks = (props) => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const tasksContainer = tasks.map((eachTask, index) => (
    <div className={classes.task} key={index}>
      <div className="d-flex">
        {index + 1}.<p className={classes.task_title}>{eachTask.title}</p>
      </div>
      {eachTask.complete ? (
        <div className={classes.status}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Complete
        </div>
      ) : null}
    </div>
  ));
  return (
    <div>
      <h3>List Tasks Page</h3>
      {tasksContainer}
    </div>
  );
};

export default Tasks;
