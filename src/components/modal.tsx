import * as React from "react"
import * as styles from "../styles/modal.module.css"
import CloseSVG from "../images/icons/close"

type Props = {
    open: boolean
    title: string
    onClose: any
}

type ComponentProps = React.PropsWithChildren<Props>

const Modal: React.FC<ComponentProps> = (props) => {
    const {open, title, onClose, children} = props;

    return (
        <>            
            { open && (
                <>
                    <div className={styles.overlay} onClick={onClose}></div>
                    <div className={styles.modal}>
                        <div className={styles.container}>
                            <div className={styles.header}>
                                <div>{title && <h2>{title}</h2>}</div>
                                <button type="button" onClick={onClose}><CloseSVG /></button>
                            </div>
                            {children && (
                                <div className={styles.content}>{children}</div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Modal