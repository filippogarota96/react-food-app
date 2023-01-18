import { createContext, useState } from "react";

const CartContext = createContext({
    cartItems: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (item) => {},
});


export default CartContext;