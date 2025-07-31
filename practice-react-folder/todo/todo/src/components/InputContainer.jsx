import styles from "./InputContainer.module.css";
import InputTask from "./InputTask";
const InputContainer = ({ handleClickButton }) => {
  return (
    <>
      <div className={styles["size"]}>
        <InputTask handleClickButton={handleClickButton}></InputTask>
      </div>
    </>
  );
};
export default InputContainer;
