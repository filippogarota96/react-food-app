import styles from "./cart_item.module.css";

const CartItem = (props) => {
    const price = props.price;
   
    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{props.data.name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{props.data.price}</span>
                    <span className={styles.amount}>x {props.data.amount}</span>
                </div>
            </div> 
            <div className={styles.actions}> 
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartItem;
