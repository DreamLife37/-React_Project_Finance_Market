import React, {FC} from "react";
import {ColumnType} from "../Table";
import styles from './TableBody.module.scss'
import {ModelReportDataType} from "../../model/types";

type PropsType = {
    columns: ColumnType []
    data: ModelReportDataType[]
    onClickSymbol: (symbol: string) => void
}
export const TableBody: FC<PropsType> = ({columns, data,onClickSymbol}) => {

    return (
        <tbody>
        {data.map((data, index) => {
            return (
                <tr className={styles.tableTr} key={index} onClick={() => onClickSymbol(data.tradingSymbol)}>
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