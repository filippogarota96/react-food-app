import styles from "./header_cart_button.module.css"
import CartIcon from "../UI/CartIcon";
import Cart from "../Cart/Cart";
import { Modal } from "../UI/Modal/Modal";
import { createPortal } from "react-dom";
import { useState } from "react";

const CartButton = () => {
    
    const [modal, setModal] = useState(false);

    const showModal = () => setModal(true);

    return (
        <div>
            <div className={styles.button} onClick={showModal}>
                <div className={styles.icon}>
                    <CartIcon />
                </div>
                <span>Your Cart</span>
                <div className={styles.badge}>0</div>
                
            </div>
           { modal == true ? createPortal(
                <Modal >
                    <Cart />
                </Modal>,
                document.body
           ) : ""}
        </div>
    )
}

export default CartButton;