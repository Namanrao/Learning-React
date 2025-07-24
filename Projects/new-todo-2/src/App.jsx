import AppName from "./Components/AppName";
import styles from "./App.module.css";
import TodoDisplay from "./Components/TodoDisplay";
import TodoDisplayHeading from "./Components/TodoDisplayHeading";
function App() {
  return (
    <>
      <div className={`${styles["todo-container-center"]}`}>
        <AppName></AppName>
        <TodoDisplayHeading></TodoDisplayHeading>
        <TodoDisplay first={"Wake up"}></TodoDisplay>
        <TodoDisplay></TodoDisplay>
      </div>
    </>
  );
}

export default App;
