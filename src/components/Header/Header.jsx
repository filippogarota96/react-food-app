import styles from "./header.module.css"
import CartButton from "../Button/CartButton";
const Header = () => {

    return (
        <div style={{ width: '100%' }}>
            <div className={styles.header}>
                <h1>ReactMeals</h1>
                <CartButton />
            </div>

            <div className={styles.main_image}>
                <img src="../../../public/meals.jpg"></img>
            </div>

        </div>
    )
}

export default Header;