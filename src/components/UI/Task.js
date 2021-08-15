import classes from "./Task.module.css";

const Task = (props) => {
  const checked = props.task.complete;

  const handle = () => {
    const complete = { complete: !props.task.complete };
    const task = { ...props.task, ...complete };
    props.onCheck(task, props.index);
  };

  return (
    <div className={classes.form_group}>
      <input
        type="checkbox"
        defaultChecked={checked}
        id={`checkbox_${props.task.id}`}
        onChange={handle}
      />
      <label htmlFor={`checkbox_${props.task.id}`}>{props.task.title}</label>
    </div>
  );
};

export default Task;
