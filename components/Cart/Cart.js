import "./Cart.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);
  const [orderedMeals,setOrderedMeals] = useState(false)

  const orderHandler = () =>{
    setOrderedMeals(true);
  }
  const addItemHandler=(e)=>{
    e.preventDefault();
    cartCtx.addItem(JSON.parse(e.target.value))
  }

  const removeItemHandler = (e) =>{
    e.preventDefault();
    cartCtx.removeItem(e.target.value)
  }
  let finalPrice=0;
  let cartItems = cartCtx.items;
  cartItems.map((item) => (finalPrice = finalPrice + item.price*item.amount));
  return (
    <Modal onCloseCart={onCloseCart}>
      {cartCtx.items.map((item) => (
        <div className="cart">
          <ul className="title">
            <h2>{item.name}</h2>
          </ul>
          <div className="amount-price">
            <div>
              <div>x{item.amount}</div>
              <div>{item.price}</div>
            </div>
            <div className="button-btn">
              <button className="subtract" value={item.id} onClick={removeItemHandler}>-</button>
              <button className="add" value = {JSON.stringify(item)} onClick={addItemHandler}>+</button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <h2>Total price</h2>
        <h2>{Math.floor(finalPrice)}</h2>
      </div>
      <div className="button-btn">
        <button onClick={onCloseCart}>Close</button>
        <button onClick={orderHandler}>Order</button>
      </div>
      <div className="title">{orderedMeals && <p>Order Successful</p>}</div>
    </Modal>
  );
};

export default Cart;
