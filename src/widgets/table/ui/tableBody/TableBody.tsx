import {FC} from "react";

import {ColumnType} from "../Table";
import styles from './TableBody.module.scss'
import {ModelReportDataType} from "../../model/types";


type PropsType = {
    columns: ColumnType []
    data: ModelReportDataType[]
}
export const TableBody: FC<PropsType> = ({columns, data}) => {

    return (
        <tbody>
        {data.map((data, index) => {
            return (
                <tr className={styles.tableTr} key={index}>
                    {columns.map(({accessor}) => {

                        // @ts-ignore
                        const tData = data[accessor] ? data[accessor] : "——";
                        return <td className={styles.tableTd} key={accessor}>{tData}</td>;
                    })}
                </tr>
            );
        })}
        </tbody>
    )
}