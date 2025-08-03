import Background from "./components/Background";
import Frame from "./components/Frame";
import InputContainer from "./components/InputContainer";
import ItemsContainer from "./components/ItemsContainer";
import { useState } from "react";
const App = () => {
  let [currentItems, setcurrentItems] = useState(["wake up", "Brush Teeth"]);
  let handleClickButton = (newItem) => {
    let newItems = [...currentItems, newItem];
    setcurrentItems(newItems);
  };
  return (
    <>
      <Background>
        <Frame>
          <InputContainer
            handleClickButton={handleClickButton}
          ></InputContainer>
          <ItemsContainer items={currentItems}></ItemsContainer>
        </Frame>
      </Background>
    </>
  );
};
export default App;
