import styles from "./cart_item.module.css";

const CartItem = (props) => {
    return (
        <div className={styles['cart-item']}>
            <h2>{props.name}</h2>
        </div>
    )
}

export default CartItem;
