import { useState } from "react";
import styles from "./meal_form.module.css";
import Input from "../UI/Input/Input";
const MealForm = (props) => {

    const [quantity, setQuantity] = useState();

    return (
        <form className={styles.form}>
            <div className={styles.input}>
                <Input  label="Amount" input={{
                    id:'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: "1"
                }}/>
            </div>
            <button type="submit">+ Add</button>
        </form>
    )
}

export default MealForm;