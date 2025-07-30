import Item from "./Item";
import { useState } from "react";
function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]); // we will store the indexes of the items and based on that we will label buy or not and futher.

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButtonClicked={(event) => onBuyButton(item, event)}
          bought={activeItems.includes(item)}
        ></Item> //Kyunki loop to yahan laga hua hai isiliye key yahan deni padegi
      ))}
    </ul>
  );
}
export default FoodItems;
