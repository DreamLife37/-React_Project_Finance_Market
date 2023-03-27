import React, {FC} from "react";
import styles from './StockInfo.module.scss'
import {useSelector} from "react-redux";
import {
    selectorDividends,
    selectorLoadingDividends, selectorLoadingQuoteAndNews,
    selectorLogoURL,
    selectorNews,
    selectorQuote
} from "../model/selectors";
import {Quote} from "entities/quote";
import {Dividends} from "entities/dividends";
import {News} from "entities/news";


export const StockInfo: FC = React.memo(() => {
    const dividendsData = useSelector(selectorDividends)
    const newsData = useSelector(selectorNews)
    const newsQuote = useSelector(selectorQuote)
    const logoURL = useSelector(selectorLogoURL)
    const loadingDividends = useSelector(selectorLoadingDividends)
    const loadingQuoteAndNews = useSelector(selectorLoadingQuoteAndNews)

    return <div className={styles.wrapper}>
        <div className={styles.quote}>{newsQuote ?
            <Quote loadingQuoteAndNews={loadingQuoteAndNews} logoURL={logoURL} data={newsQuote}/> : ''}</div>
        <div className={styles.dividends}>{dividendsData &&
            <Dividends data={dividendsData} loadingDividends={loadingDividends}/>}</div>
        <div className={styles.news}>{newsData.map((data) => {
            return <News key={data.datetime} data={data} loadingQuoteAndNews={loadingQuoteAndNews}/>
        })}</div>
    </div>
})