
import { useContext } from "react";
import styles from "./meal.module.css";
import MealForm from "./MealForm";
import CartContext from "../../store/cart-context";

const Meal = (props) => {
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const AddToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <div className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={styles.description}>{props.description}</p>
                <span className={styles.price}>{price}</span>
            </div>
            <MealForm id={props.id} onAddToCart={AddToCartHandler} />
        </div>
    )
}

export default Meal;