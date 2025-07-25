import styles from "./Buttons.module.css";
function Buttons({ createbutton }) {
  return (
    <>
      <button className={styles["button-styling"]}>{createbutton}</button>
    </>
  );
}
export default Buttons;
