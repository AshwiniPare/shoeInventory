import { useState } from "react";
import CartContext from "./cart-context";

const items = [];
const SHOES = 
  [{
        id:'m1',
        name:'Nike Shoes',
        description:'pure cotton',
        price:34
    },
    {
        id:'m2',
        name:'Puma Shoes',
        description:'100% cotton',
        price:20
    },
    {
        id:'m3',
        name:'Bata Shoes',
        description:'pure cotton',
        price:10
    },
    {
        id:'m4',
        name:'Walkway Shoes',
        description:'pure cotton',
        price:340
    },
    {
        id:'m5',
        name:'walkway shoes',
        description:'100% cotton',
        price:440
    }]

const CartProvider = (props) => {
  const [cartState, SetCartState] = useState(items);
  const [shoeState,setShoeState]=useState(SHOES)

  const addShoe = (obj)=>{
    setShoeState((pre)=>{return [obj,...pre]})
  }
  
  const addShoeToCart = (item)=> {
  const existingCartItemIndex = cartState.findIndex(
    (cartitem) => cartitem.id === item.id
  );
  const existingCartItem = cartState[existingCartItemIndex];
  let updatedItems;
  if (existingCartItem) {
  const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + 1,
    };
    updatedItems = [...cartState];
    updatedItems[existingCartItemIndex] = updatedItem;
  SetCartState(updatedItems)
  }else{
    SetCartState((preState) => {
      return [item, ...preState];
    });
  }
}

  const removeShoeFromCart = (id) => {
    const existingCartItemIndex = cartState.findIndex(
      (item) => item.id === id
    );
    const existingItem = cartState[existingCartItemIndex];
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = cartState.filter(item => item.id !== id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...cartState];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    SetCartState(updatedItems)
  };

  const cartContext = {
    items: cartState,
    totalAmount: 0,
    addItem: addShoeToCart,
    removeItem: removeShoeFromCart,
    addList:addShoe,
    shoes:shoeState
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
