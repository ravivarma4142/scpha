import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./../components/UI/Task";
import { taskActions } from "../store/task";
import classes from "./AddEditTasks.module.css";

const AddEditTasks = (props) => {
  const taskStore = useSelector((state) => state.tasks.tasks);
  const [newTaskValue, setnewTaskValue] = useState("");
  const [tasks, setTasks] = useState([...taskStore]);

  const dispatch = useDispatch();

  const replaceAt = (array, index, value) => {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  };

  /**On Check handler updates
   * the tasks state variable */
  const onCheckHandle = (taske, ind) => {
    let updatedTasks = [...tasks];
    updatedTasks = replaceAt(updatedTasks, ind, taske);
    setTasks(updatedTasks);
  };

  /**On Click on add task button
   * updates the redux store with new task object
   * and updates the state tasks variable
   */
  const addTask = () => {
    if (newTaskValue === "") {
      return;
    }

    const updatedTasks = [
      ...tasks,
      {
        id: tasks.length + 1,
        title: newTaskValue,
        complete: false,
      },
    ];
    setTasks(updatedTasks);
    setnewTaskValue("");
    dispatch(taskActions.update(updatedTasks));
  };

  const tasksContainer = tasks.map((eachTask, index) => (
    <Task
      task={eachTask}
      key={eachTask.id}
      index={index}
      onCheck={onCheckHandle}
    />
  ));

  const addTaskHandler = (event) => {
    setnewTaskValue(event.target.value);
  };

  /**
   * Mark complete handler updates the redux store
   * with state tasks variable
   */
  const updateTasks = () => {
    dispatch(taskActions.update(tasks));
  };

  return (
    <div>
      <h3>Add Tasks Page</h3>
      <div className="d-flex">
        <input
          type="text"
          placeholder="Add Task"
          value={newTaskValue}
          className={classes.add_input}
          onChange={addTaskHandler}
        />
        <button
          className={`btn ${classes.add_btn}`}
          onClick={addTask}
          disabled={newTaskValue ? false : true}
        >
          <span className={`${classes.icon}`}>+</span> Add
        </button>
      </div>

      <div className={classes.tasks_container}>
        {tasksContainer.length ? tasksContainer : null}
      </div>

      <button className={`btn ${classes.mark_complete}`} onClick={updateTasks}>
        Mark Complete
      </button>
    </div>
  );
};

export default AddEditTasks;
