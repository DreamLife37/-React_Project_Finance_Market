import {FC} from "react";
import styles from './TableHead.module.scss'
import {ColumnType} from "../Table";

type PropsType = {
    columns: ColumnType []
    sortData: (label: string) => void
}

export const TableHead: FC<PropsType> = ({columns, sortData}) => {
    return (
        <thead>
        <tr className={styles.tableTr}>
            {columns.map(({label, accessor}) => {
                return <th className={styles.tableTh} key={accessor} onClick={() => {
                    sortData(accessor)
                }}>{label}</th>;
            })}
        </tr>
        </thead>
    )
}