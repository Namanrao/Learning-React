import styles from "./AppBoundary.module.css";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
function AppBoundary() {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles["app-boundary"]}>
        <Display></Display>
        <ButtonContainer allbuttons={buttons}></ButtonContainer>
      </div>
    </>
  );
}
export default AppBoundary;
