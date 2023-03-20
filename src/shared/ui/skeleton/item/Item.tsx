import {FC} from "react";
import styles from "./Item.module.scss";

type PropsType = {
    columnSkeletonArr: number []
}

export const Item: FC<PropsType> = ({columnSkeletonArr}) => {
    return <tr>
        {columnSkeletonArr.map((item) => {
            return <td key={item} className={styles.loading}>
                <div className={styles.bar}></div>
            </td>;
        })}
    </tr>
}