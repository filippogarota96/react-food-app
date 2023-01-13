import styles from "./modal.module.css";
import { createPortal } from 'react-dom';


const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose} />;
  };

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
}; 


export function Modal(props) {

    const portalElement = document.getElementById("overlays");
    return (
        <>
            {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    )
}