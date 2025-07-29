import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
function App() {
  let foodItems = ["dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  let texttoshow = "Food Item Entered by user";
  const handleOnChnage = (event) => {
    console.log(event.target.value);
    texttoshow = event.target.value;
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChnage={handleOnChnage}></FoodInput>
        <p>{texttoshow}</p>

        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
