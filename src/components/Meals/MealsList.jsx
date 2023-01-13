import styles from "./meals.module.css";
import Card from "../UI/Card/Card";
import DUMMY_MEALS from "../../Database/dummyMeals";
import Meal from "./Meal";

const MealsList = () => {

    const mealList = DUMMY_MEALS.map(meal => (
        <Meal
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <Card>
            {mealList}
        </Card>
    )

}


export default MealsList;