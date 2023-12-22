import { useState } from "react";
import Header from "./components/Layout/Header";
import ShoeInputForm from './components/ShoeInputForm/ShoeInputForm'
import Shoes from "./components/Shoe/Shoes";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const cartVisibleHandler = () => {
    setCartVisible(true);
  };

  const cartHideHandler = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      {cartVisible && <Cart onCloseCart={cartHideHandler} />}
      <Header onCartClick={cartVisibleHandler} />
      <ShoeInputForm />
      <Shoes />
    </CartProvider>
  );
}

export default App;
