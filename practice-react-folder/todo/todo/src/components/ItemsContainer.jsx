import styles from "./ItemsContainer.module.css";
import Items from "./Items";

const ItemsContainer = ({ items, handleRemove }) => {
  return (
    <div className={styles.size}>
      {items.map((item, index) => (
        <Items
          key={index}
          item={item}
          handleRemove={() => handleRemove(item)}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
