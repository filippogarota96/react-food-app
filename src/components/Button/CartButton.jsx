import styles from "./header_cart_button.module.css"
import CartIcon from "../UI/CartIcon";
import Cart from "../Cart/CartItem";
import { Modal } from "../UI/Modal/Modal";
import { createPortal } from "react-dom";
import { useState } from "react";

const CartButton = (props) => {
    return (
        <div>
            <div className={styles.button} onClick={props.onClick}>
                <div className={styles.icon}>
                    <CartIcon />
                </div>
                <span>Your Cart</span>
                <div className={styles.badge}>2</div>
            </div>
        </div>
    )
}

export default CartButton;