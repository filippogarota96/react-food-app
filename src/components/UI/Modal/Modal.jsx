import styles from "./modal.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartItem from "../../Cart/CartItem";


// const CartList = (items) => {
//     return (items.map((item, index) => (
//         <CartItem data={item} key={index}/>
//     )))
// }


export function Modal(props) {
    
    const ctx = useContext(CartContext);

    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                {ctx.cartItems}
                {/* <CartList items={ctx.cartItems} /> */}
            </div>
        </div>
    )
}