import {FC} from "react";
import styles from './TableHead.module.scss'
import {ColumnType} from "../Table";

type PropsType = {
    columns: ColumnType []
}

export const TableHead: FC<PropsType> = ({columns}) => {
    return (
        <thead>
        <tr className={styles.tableTr}>
            {columns.map(({label, accessor}) => {
                return <th className={styles.tableTh} key={accessor}>{label}</th>;
            })}
        </tr>
        </thead>
    )
}