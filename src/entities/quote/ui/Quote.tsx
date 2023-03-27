import React, {FC} from "react";
import styles from "./Quote.module.scss"
import {QuoteDataType} from "../model/types";
import logo from "../assets/image/logo.png"

export type PropsType = {
    data: QuoteDataType
    logoURL: string
    loadingQuoteAndNews: boolean
}

export const Quote: FC<PropsType> = ({data, logoURL, loadingQuoteAndNews}) => {
    const placeholderLogo = logo
    const onErrorImage = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = placeholderLogo
    }
    const sign = Math.sign(data.changePercent)
    const currency = () => {
        if (data.currency === 'USD') {
            return '$'
        } else return ''
    }

    return <div className={styles.quote}>
        {loadingQuoteAndNews
            ? <div className={styles.quoteSkeleton}/>
            : <div className={styles.quote__inner}>
                {Object.keys(data).length === 0
                    ? <div className={styles.quote__no}> Информация не найдена</div>
                    : <>
                        <div className={styles.quote__innerTop}>
                            <div className={styles.quote__logo}>
                                <img onError={(event) => onErrorImage(event)} className={styles.quote__logoImg}
                                     src={logoURL} alt={data.symbol}/>
                            </div>
                            <div className={styles.quote__logoSymbol}>{data.symbol}</div>
                            <div className={styles.quote__price}>
                                <div
                                    className={(sign > 0) ? styles.quote__upPrice : styles.quote__downPrice}>{`${data.latestPrice} ${currency()}`}</div>
                                <div
                                    className={(sign > 0) ? styles.quote__changePercent_up : styles.quote__changePercent_down}>{(data.changePercent * 100).toFixed(2)} %
                                </div>
                            </div>
                        </div>
                        <div className={styles.quote__innerBottom}>
                            <div>52 недельный минимум: <span
                                className={styles.quote__52min}>{`${data.week52Low} ${currency()}`}</span></div>
                            <div>52 недельный максимум: <span
                                className={styles.quote__52max}>{`${data.week52High} ${currency()}`}</span></div>
                        </div>
                    </>}
            </div>}
    </div>
}