import Item from "./Item";
function FoodItems({ items }) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButtonClicked={() => {
            console.log(`${item} bought`);
          }}
        ></Item> //Kyunki loop to yahan laga hua hai isiliye key yahan deni padegi
      ))}
    </ul>
  );
}
export default FoodItems;
