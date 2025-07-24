import AppName from "./Components/AppName";
import Describe from "./Components/Describe";
import Time from "./Components/Time";
import "./app.css";
function App() {
  return (
    <div className="app-container">
      <AppName></AppName>
      <Describe></Describe>
      <Time></Time>
    </div>
  );
}
export default App;
