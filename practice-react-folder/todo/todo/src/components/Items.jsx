import styles from "./Items.module.css";
const Items = ({ item }) => {
  return (
    <div className={styles["size"]}>
      {item}
      <button className={`${styles["button"]} btn btn-danger`} type="button">
        Remove
      </button>
    </div>
  );
};

export default Items;
