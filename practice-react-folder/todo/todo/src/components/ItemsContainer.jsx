import styles from "./ItemsContainer.module.css";
import Items from "./Items";

const ItemsContainer = ({ items, addItems }) => {
  return (
    <div className={styles.size}>
      {items.map((item, index) => (
        <Items key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemsContainer;
