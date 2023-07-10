import * as React from "react"
import * as styles from "../styles/element.module.css"
import { NodeType } from "../types/node"

type ComponentProps = {
    element: NodeType
}

const Element: React.FC<ComponentProps> = ({element}) => {
    return (
        <div className={styles.item} 
            style={{background: `linear-gradient(110deg, rgba(${element.elementGroup.bgColorRGB}, 0.2), rgba(${element.elementGroup.bgColorRGB}, 0.3)`}}>
            <div className={styles.top}>
                <span className={styles.atomicNumber}>{element.atomicNumber}</span>
                <span className={styles.atomicMass}>{element.atomicMass}</span>
            </div>

            <div className={styles.content}>
                <span className={styles.symbol}>{element.symbol}</span>
                <span className={styles.name}>{element.name}</span>
            </div>
        </div>
    )
}

export default Element