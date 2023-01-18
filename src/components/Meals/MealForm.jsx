import styles from "./meal_form.module.css";
import Input from "../UI/Input/Input";
import { useRef, useState } from "react";
const MealForm = (props) => {

    const [amontIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;

        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length == 0 ||
            enteredAmount < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return 
        }

        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form
            className={styles.form}
            onSubmit={submitHandler}
        >
            <div className={styles.input}>
                <Input
                    ref={amountInputRef}
                    label="Amount"
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: "1"
                    }} />
            </div>
            <button type="submit">+ Add</button>
            {!amontIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealForm;