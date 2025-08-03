import styles from "./Items.module.css";
const Items = ({ item, handleRemove }) => {
  return (
    <div className={styles["size"]}>
      {item}
      <button
        onClick={handleRemove}
        className={`${styles["button"]} btn btn-danger`}
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

export default Items;
