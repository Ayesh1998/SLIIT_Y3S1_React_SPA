import React, { useState } from "react";
import { AppContext } from "./app-context";

const GlobalState = props => {
  const [loggedin, setLoggedin] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [products, setProducts] = useState([
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 }
  ]);

  const [cart, setCart] = useState([
    { id: "p1", title: "Gaming Mouse", price: 29.99 }
  ]);

  //   const addItemToCart = item => {
  //     const updatedCart = [...cart];
  //     const updatedItemIndex = updatedCart.findIndex(item => item.id === item.id);

  //     if (updatedItemIndex < 0) {
  //       updatedCart.push({ ...item, quantity: 1 });
  //     } else {
  //       const updatedItem = {
  //         ...updatedCart[updatedItemIndex]
  //       };
  //       updatedItem.quantity++;
  //       updatedCart[updatedItemIndex] = updatedItem;
  //     }
  //   };

  //   removeItemFromCart = (productId, state) => {
  //     console.log("Removing product with id: " + productId);
  //     const updatedCart = [...cart];
  //     const updatedItemIndex = updatedCart.findIndex(
  //       item => item.id === productId
  //     );

  //     const updatedItem = {
  //       ...updatedCart[updatedItemIndex]
  //     };
  //     updatedItem.quantity--;
  //     if (updatedItem.quantity <= 0) {
  //       updatedCart.splice(updatedItemIndex, 1);
  //     } else {
  //       updatedCart[updatedItemIndex] = updatedItem;
  //     }
  //     return { ...state, cart: updatedCart };
  //   };

  const toggleDropdownHidden = () => {
    setHidden(!hidden);
  };

  const logout = state => {
    setLoggedin(false);
  };

  return (
    <AppContext.Provider
      value={{
        hidden: hidden,
        products: products,
        loggedin: loggedin,
        hidden: hidden,
        cart: cart,
        logout: logout,
        // addItemToCart: addItemToCart,
        toggleDropdownHidden: toggleDropdownHidden
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default GlobalState;
