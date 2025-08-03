import { useState } from "react";
import styles from "./InputTask.module.css";

const InputTask = ({ handleClickButton }) => {
  let [currentInput, setcurrentInput] = useState("");
  const getItem = (event) => {
    setcurrentInput(event.target.value);
  };
  const handleClick = () => {
    handleClickButton(currentInput);
    setcurrentInput("");
  };
  return (
    <>
      <input
        className={styles["size"]}
        placeholder="Enter the Task you want to Add"
        type="text"
        onChange={getItem}
        value={currentInput}
      />
      <button
        className={`${styles["button-style"]} btn btn-success`}
        type="button"
        onClick={handleClick}
      >
        ADD
      </button>
    </>
  );
};

export default InputTask;
