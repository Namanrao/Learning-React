import styles from "./App.module.css";
import AppName from "./Components/AppName";
import AddTaskContainer from "./Components/AddTaskContainer";
import DisplayTaskContainer from "./Components/DisplayTaskContainer";
import { useState } from "react";

const App = () => {
  let [currentTasks, setcurrentTasks] = useState([]);

  let handleAddbutton = ({ newtask, newduedate }) => {
    let newlist = [
      ...currentTasks,
      {
        taskName: newtask,
        dueDate: newduedate,
      },
    ];
    setcurrentTasks(newlist);
  };

  let handleRemovebutton = (taskNameToRemove) => {
    let updatedList = currentTasks.filter(
      (task) => task.taskName !== taskNameToRemove
    );
    setcurrentTasks(updatedList);
  };

  return (
    <div className={styles["main-container"]}>
      <AppName />
      <AddTaskContainer handleAddbutton={handleAddbutton} />
      <DisplayTaskContainer
        currentTasks={currentTasks}
        handleRemovebutton={handleRemovebutton}
      />
    </div>
  );
};

export default App;
