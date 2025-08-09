import styles from "./Task.module.css";

const Task = ({ taskName, dueDate, handleRemovebutton }) => {
  return (
    <div className={`${styles["task"]} container text-center`}>
      <div className="row">
        <div className="col">{taskName}</div>
        <div className="col">{dueDate}</div>
        <div className="col">
          <button
            onClick={() => handleRemovebutton(taskName)} // pass taskName to parent
            type="button"
            className="btn btn-danger"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
