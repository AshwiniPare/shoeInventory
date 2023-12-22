import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const ItemNumbers = cartCtx.items.length;
  return (
    <button onClick={props.onCartClick} className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{ItemNumbers}</span>
    </button>
  );
};

export default HeaderCartButton;
