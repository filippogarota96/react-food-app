import styles from "./header_cart_button.module.css"
import CartIcon from "../UI/CartIcon";
import Cart from "../Cart/CartItem";
import { Modal } from "../UI/Modal/Modal";
import { createPortal } from "react-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {

    const [btnIsHiglighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const { cartItems } = cartCtx

    const numberOfcartitems = cartCtx.cartItems.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);


    const btnClasses = `${styles.button} ${btnIsHiglighted ? styles.bump : ''}`;

    useEffect(() => {
        if (cartItems.length === 0) {
            return;
        }
        
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300); 

        return () => {
            clearTimeout(timer);
        }

    }, [cartItems])

    return (
        <div>
            <div className={btnClasses} onClick={props.onClick}>
                <div className={styles.icon}>
                    <CartIcon />
                </div>
                <span>Your Cart</span>
                <div className={styles.badge}>{numberOfcartitems}</div>
            </div>
        </div>
    )
}

export default CartButton;