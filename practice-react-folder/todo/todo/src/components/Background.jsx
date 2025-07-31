import styles from "./Background.module.css";
const Background = (props) => {
  return (
    <>
      <div className={`${styles["bgc"]} ${styles["flex"]}`}>
        <h1 className={styles["h1"]}>TODO- APP</h1>
        {props.children}
      </div>
    </>
  );
};

export default Background;
