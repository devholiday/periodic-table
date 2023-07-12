import * as React from "react"
import * as styles from "../styles/element.module.css"
import { ElementType } from "../types/node"

type ComponentProps = {
    element: ElementType,
    showElement: (element:ElementType) => void
    legend?: boolean
}

const Element: React.FC<ComponentProps> = ({showElement, element, legend}) => {
    return (
        <div className={legend ? styles.item + ' ' +styles.legend : styles.item}
            onClick={() => showElement(element)} 
            style={{background: `linear-gradient(110deg, rgba(${element.elementGroup.bgColorRGB}, 0.2), rgba(${element.elementGroup.bgColorRGB}, 0.3))`,
            borderImage: `linear-gradient(rgba(${element.elementGroup.borderColorRGB}, 0.2), rgba(${element.elementGroup.borderColorRGB}, 0.8)) 30`}}>
            <div className={styles.top}>
                <span className={styles.atomicNumber + ' ' + styles.legendItem + ' ' + styles.legendItemLeft} data-tooltip="Atomic Number">{element.atomicNumber}</span>
                <span className={styles.atomicMass + ' ' + styles.legendItem + ' ' + styles.legendItemRight} data-tooltip="Atomic Mass, u">{element.atomicMass}</span>
            </div>

            <div className={styles.content}>
                <span className={styles.symbol + ' ' + styles.legendItem + ' ' + styles.legendItemRight} data-tooltip="Symbol">{element.symbol}</span>
                <span className={styles.name + ' ' + styles.legendItem + ' ' + styles.legendItemLeft} data-tooltip="Name">{element.name}</span>
            </div>
        </div>
    )
}

export default Element