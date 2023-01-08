import { createContext, useState } from "react";

const CartContext = createContext({
    cartItems: []
});

export const CartContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState([]);
    
    return (
        <CartContextProvider value={{cartItems: cartItems }}>
            {props.children}
        </CartContextProvider>
    )
}

export default CartContext;