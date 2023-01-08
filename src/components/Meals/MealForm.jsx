import { useState } from "react";
import styles from "./meal_form.module.css";

const MealForm = (props) => {

    const [quantity, setQuantity] = useState();

    return (
        <form className={styles.form}>
            <div className={styles.input}>
                <label htmlFor={props.id}>Amount</label>
                <input type="number" value={quantity} id={props.id} />
            </div>
            <button type="submit">+ Add</button>
        </form>
    )
}

export default MealForm;