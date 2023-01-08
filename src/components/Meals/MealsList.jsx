import styles from "./meals.module.css";
import Card from "../UI/Card/Card";
import DUMMY_MEALS from "../../Database/dummyMeals";
import Meal from "./Meal";

const MealsList = () => {
    
    const mealList = DUMMY_MEALS.map(meal => (
        <Meal item={meal} key={meal.id}  /> 
    ));

    return (
        <Card>
            {mealList}
        </Card>   
    )

}


export default MealsList;