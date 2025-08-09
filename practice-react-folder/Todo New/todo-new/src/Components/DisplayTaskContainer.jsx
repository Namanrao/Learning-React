import Task from "./Task";
import styles from "./DisplayTaskContainer.module.css";

const DisplayTaskContainer = ({ currentTasks, handleRemovebutton }) => {
  return (
    <div className={styles["display-container"]}>
      {currentTasks.map((task) => (
        <Task
          key={task.taskName} // or use a unique ID if available
          taskName={task.taskName}
          dueDate={task.dueDate}
          handleRemovebutton={handleRemovebutton}
        />
      ))}
    </div>
  );
};

export default DisplayTaskContainer;
