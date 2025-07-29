import styles from "./FoodInput.module.css";
function FoodInput() {

const handleOnChnage = (event)=>{
  console.log(event.target.value);
}

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
