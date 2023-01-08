import styles from "./modal.module.css"

// const ShowModal = (show, items) => {
//     if (show) {
//         return

//         <div className={styles.backdrop}>
//             <div className={styles.media}>
//                 {items}
//             </div>

//         </div>

//     }
// }

export function Modal(props) {
    return (
        // <ShowModal show={props.show} items={props.children} />
        <div>
            {props.children}
        </div>
    )
}