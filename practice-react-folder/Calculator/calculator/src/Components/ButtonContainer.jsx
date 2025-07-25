import styles from "./ButtonContainer.module.css";
import Buttons from "./Buttons"
function ButtonContainer({allbuttons}) {
  return (
    <>
      <div className={styles["container-boundary"]}>
        {allbuttons.map((button)=>(<Buttons key={button} createbutton={button}></Buttons>))}
      </div>
    </>
  );
}
export default ButtonContainer;
