import styles from "./App.module.css";
import MainContainer from "./Components/MainContainer";
function App() {
  return (
    <>
      <div className={`${styles["container-center"]} "App-container"`}>
        <MainContainer></MainContainer>
      </div>
    </>
  );
}
export default App;
