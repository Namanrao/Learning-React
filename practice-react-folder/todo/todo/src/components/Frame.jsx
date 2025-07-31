import styles from "./Frame.module.css";
const Frame = (props) => {
  return (
    <>
      <div className={`${styles["glass"]} ${styles["size"]}`}>
        {props.children}
      </div>
    </>
  );
};

export default Frame;
