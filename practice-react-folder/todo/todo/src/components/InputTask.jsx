import { useState } from "react";
import styles from "./InputTask.module.css";

const InputTask = ({ handleClickButton }) => {
  return (
    <>
      <input
        className={styles["size"]}
        placeholder="Enter the Task you want to Add"
        type="text"
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
