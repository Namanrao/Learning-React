import { useState } from "react";
import styles from "./InputTask.module.css";

const InputTask = ({ handleClickButton }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input
        className={styles["size"]}
        placeholder="Enter the Task you want to Add"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        className={`${styles["button-style"]} btn btn-success`}
        type="button"
        onClick={handleClickButton}
      >
        ADD
      </button>
    </>
  );
};

export default InputTask;
