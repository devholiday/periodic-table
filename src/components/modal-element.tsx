import * as React from "react"
import { ElementType } from "../types/node"
import * as styles from "../styles/modal-element.module.css"

const ModalElement: React.FC<{element: ElementType|undefined}> = ({element}) => {
    if (!element) {
        return <></>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}
                style={{background: `linear-gradient(110deg, rgba(${element.elementGroup.bgColorRGB}, 0.2), rgba(${element.elementGroup.bgColorRGB}, 0.3)`}}>
                <span className={styles.atomicNumber}>{element.atomicNumber}</span>
                <span className={styles.symbol}>{element.symbol}</span>
                <span className={styles.name}>{element.name}</span>
                <span className={styles.elementGroupName}>{element.elementGroup.name}</span>
            </div>
            <div className={styles.content}>
                {element.description && (
                    <div className={styles.desc}>{element.description}</div>
                )}
                <div>
                    <div className={styles.row}>
                        <span>Atomic Mass</span>
                        <span className={styles.rowValue}>{element.atomicMass} u</span>
                    </div>
                    {element.meltingPoint && (
                        <div className={styles.row}>
                            <span>Melting Point</span>
                            <span className={styles.rowValue}>{element.meltingPoint}</span>
                        </div>
                    )}
                    {element.boilingPoint && (
                        <div className={styles.row}>
                            <span>Boiling Point</span>
                            <span className={styles.rowValue}>{element.boilingPoint}</span>
                        </div>
                    )}
                    {element.discoveryDate && (
                        <div className={styles.row}>
                            <span>Discovery date</span>
                            <span className={styles.rowValue}>{element.discoveryDate}</span>
                        </div>
                    )}
                    {element.discoveredBy && (
                        <div className={styles.row}>
                            <span>Discovered by</span>
                            <span className={styles.rowValue}>{element.discoveredBy}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ModalElement