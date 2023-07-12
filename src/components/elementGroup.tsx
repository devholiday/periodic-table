import * as React from "react"
import * as styles from "../styles/element-group.module.css"
import { ElementGroupType } from "../types/node"

type ComponentProps = {
    elementGroup: ElementGroupType
}

const ElementGroup: React.FC<ComponentProps> = ({elementGroup}) => {
    const circleStyle = {
        background: `linear-gradient(110deg, rgba(${elementGroup.bgColorRGB}, 0.2), rgba(${elementGroup.bgColorRGB}, 0.3))`,
        border: '2px solid #'+elementGroup.borderColor,
        borderRadius: '50px',
        width: '16px',
        height: '16px',
        marginRight: '7px'
    };

    return (
        <div className={styles.elementGroup}>
            <div style={circleStyle}></div>
            <div>{elementGroup.name}</div>
        </div>
    )
}

export default ElementGroup