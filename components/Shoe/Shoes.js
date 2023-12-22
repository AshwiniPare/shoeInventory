import { useContext } from "react";
import ShoeList from "./ShoeList";
import "./Shoes.css";
import CartContext from "../../store/cart-context";



const Meals = (props) => {
  const cartCtx=useContext(CartContext)
  return (
    <ul className="meals">
      {cartCtx.shoes.map((meal) => (
        <ShoeList
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </ul>
  );
};

export default Meals;
