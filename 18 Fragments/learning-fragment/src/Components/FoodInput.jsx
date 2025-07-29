import styles from "./FoodInput.module.css";
function FoodInput({ handleOnChnage }) {
  return (
    <>
      <input
        placeholder="Enter Food Item here"
        className={styles.foodInput}
        type="text"
        onChange={handleOnChnage}
      />
    </>
  );
}
export default FoodInput;
