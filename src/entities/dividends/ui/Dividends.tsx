import {FC} from "react";
import styles from "./Dividends.module.scss"
import {DividendsDataType} from "../model/types";

export type PropsType = {
    data: DividendsDataType[]
    loadingDividends: boolean
}

export const Dividends: FC<PropsType> = ({data, loadingDividends}) => {

    return <div className={styles.dividends}>
        {loadingDividends
            ? <div className={styles.dividendsSkeleton}/>
            : <div className={styles.dividends__inner}>
                {data.length === 0
                    ? <div className={styles.dividends__no}>Дивиденды не найдены</div>
                    : <div className={styles.dividends__title}>Дивиденды:</div>}
                {data.map((dividend) => {
                    return <div className={styles.dividends__body} key={dividend.date}>
                        <div>{dividend.paymentDate}</div>
                        <div className={styles.dividends__amount}>{dividend.amount} $</div>
                    </div>
                })}
            </div>}
    </div>
}