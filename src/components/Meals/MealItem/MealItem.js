import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemFrom from "./MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; //1st $ for rendering 2nd $ for literal for jsx toFixed restrict 2 decimal points

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
