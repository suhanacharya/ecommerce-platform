import React from "react";
import { useState } from "react";

export const CartContext = React.createContext([[], () => {}]);

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  // const updateCart = (operation, prodId) => {
  //     if(operation === "insert") {
  //         setCartItems([...cartItems, prodId])
  //     }
  //     else if(operation === "delete") {
  //         let newItems = cartItems.filter((item) => item.prodId !== prodId)
  //         setCartItems(newItems)
  //     }

  // }

  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
