import { Modal } from "../UI/Modal/Modal"
import CartItem from "./CartItem"
import styles from "./cart.module.css"
// const ctx = useContext(CartContext);

const CartList = (items) => {
    
    return items.items.map((item, index) => (
        <ul>
            <CartItem data={item} key={index} />
        </ul>
    )) 
}
export function Cart(props) {
    return (
        <Modal onClose={props.onClose}>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}