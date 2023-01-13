import styles from "./header.module.css"
import CartButton from "../Button/CartButton";
const Header = (props) => {

    return (
        <div style={{ width: '100%' }}>
            <div className={styles.header}>
                <h1>ReactMeals</h1>
                <CartButton onClick={props.onShowCart} />
            </div>

            <div className={styles.main_image}>
                <img src="../../../public/meals.jpg"></img>
            </div>

        </div>
    )
}

export default Header;