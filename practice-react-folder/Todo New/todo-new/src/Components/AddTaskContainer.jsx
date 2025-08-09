import styles from "./AddTaskContainer.module.css";
import { useState } from "react";
const AddTaskContainer = ({ handleAddbutton }) => {
  let [currentItem, setcurrentItem] = useState("");
  let [duedate, setduedate] = useState("");

  let handleAdd = () => {
    if (!currentItem.trim()) return;
    handleAddbutton({
      newtask: currentItem,
      newduedate: duedate,
    });
    setcurrentItem("");
    setduedate("");
  };

  let handletaskinput = (event) => {
    setcurrentItem(event.target.value);
  };

  let handledateinput = (event) => {
    setduedate(event.target.value);
  };

  return (
    <>
      <div className={styles["add-task-container"]}>
        <input
          onChange={handletaskinput}
          className={styles["input-task"]}
          placeholder="Enter the task you want to add"
          type="text"
          value={currentItem}
        />
        <input
          onChange={handledateinput}
          className={styles["middle-margin"]}
          type="date"
          value={duedate}
        />
        <button onClick={handleAdd} type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </>
  );
};
export default AddTaskContainer;
