import styles from "./meal.module.css";
import MealForm from "./MealForm";

const Meal = (props) => {
    return (
        <div className={styles.meal}>
            <div>
                <h3>{props.item.name}</h3>
                <p className={styles.description}>{props.item.description}</p>
                <span className={styles.price}>{props.item.price}$</span>
            </div>
            <MealForm id={props.item.id} />
        </div>
    )
}

export default Meal;