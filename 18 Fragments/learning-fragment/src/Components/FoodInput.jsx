import styles from "./FoodInput.module.css";
function FoodInput({ handleKeyDown }) {
  return (
    <>
      <input
        placeholder="Enter Food Item here"
        className={styles.foodInput}
        type="text"
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
export default FoodInput;
