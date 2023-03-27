import {FC} from "react";
import styles from "./News.module.scss"
import {NewsDataType} from "../model/types";


type PropsType = {
    data: NewsDataType
    loadingQuoteAndNews: boolean
}

export const News: FC<PropsType> = ({data, loadingQuoteAndNews}) => {
    return <div className={styles.new}>
        {loadingQuoteAndNews
            ? <div className={styles.newsSkeleton}/>
            : <a className={styles.new__inner} href={data.url} target={'_blank'} rel="noreferrer">
                <div className={styles.new__header}>
                    <div className={styles.new__wrapper_img}>
                        <img className={styles.new__img} src={data.image} alt={data.headline}/>
                    </div>
                </div>
                <div className={styles.new__body}>
                    <div className={styles.new__title}>{data.headline}</div>
                </div>
            </a>}
    </div>
}