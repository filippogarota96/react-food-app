import styles from "./meal.module.css";
import MealForm from "./MealForm";

const Meal = (props) => {
    return (
        <div className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={styles.description}>{props.description}</p>
                <span className={styles.price}>{props.price}$</span>
            </div>
            <MealForm id={props.id} />
        </div>
    )
}

export default Meal;