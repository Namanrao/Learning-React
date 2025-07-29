// function Item(props) {
//   //You can also use  array destructuring method as in
//   let { foodItem } = props;
//   return <li className="list-group-item">{foodItem}</li>;
// }
// export default Item;

// -------//
import styles from "./Item.module.css";
// In fact you could also destructure the array inside the parameters itself as in .

function Item({ foodItem }) {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`Item Bought was ${foodItem}`);
  };

  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={`${styles["kg-span"]}`}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={(event) => handleBuyButtonClicked(event)}
        >
          BUY
        </button>
      </li>
    </>
  );
}
export default Item;
