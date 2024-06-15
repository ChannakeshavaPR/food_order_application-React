import classes from "./MealItem.module.css";
import MealItemFrom from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; //1st $ for rendering 2nd $ for literal for jsx toFixed restrict 2 decimal points
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom />
      </div>
    </li>
  );
};

export default MealItem;
