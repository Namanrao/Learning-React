import Background from "./components/Background";
import Frame from "./components/Frame";
import InputContainer from "./components/InputContainer";
import ItemsContainer from "./components/ItemsContainer";
import { useState } from "react";
const App = () => {
  let [currentItem, setcurrentItem] = useState(["wake up", "Brush Teeth"]);
  let handleClickButton = (event) => {
    console.log(event);
  };
  return (
    <>
      <Background>
        <Frame>
          <InputContainer
            handleClickButton={handleClickButton}
          ></InputContainer>
          <ItemsContainer items={currentItem}></ItemsContainer>
        </Frame>
      </Background>
    </>
  );
};
export default App;
