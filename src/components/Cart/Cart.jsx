import { Modal } from "../UI/Modal/Modal"
import CartItem from "./CartItem"
import styles from "./cart.module.css"
import { useContext } from "react"
import CartContext from "../../store/cart-context"

// const ctx = useContext(CartContext);

const CartList = (items) => {

    const cartCtx = useContext(CartContext)

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    return cartCtx.cartItems.map((item, index) => (
        <ul>
            <CartItem
                data={item}
                key={index}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item )}
            />
        </ul>
    ))
}

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const hasItems = cartCtx.cartItems.length > 0;

    return (
        <Modal onClose={props.onClose}>
            <CartList />
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;