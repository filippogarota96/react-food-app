import { createContext, useState } from "react";

const CartContext = createContext({
    cartItems: [
        {
            id: 'm1',
            name: 'Sushi',
            quantiy: 2,
            price: 22.99,
        }
    ]
});

export const CartContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContextProvider value={{ cartItems: cartItems }}>
            {props.children}
        </CartContextProvider>
    )
}

export default CartContext;