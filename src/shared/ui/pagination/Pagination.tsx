import {FC} from "react";
import styles from './Pagination.module.scss'

type PropsType = {
    currentPageCallback: (pageNumber: number) => void
    currentPage: number
    totalPages: number
}

export const Pagination: FC<PropsType> = ({currentPageCallback, currentPage, totalPages}) => {

    const totalPagesArr = Array.from(Array(totalPages).keys());

    return <div>
        <ul className={styles.pagination}>
            {totalPagesArr.map((page) => {
                return <li key={page} onClick={() => currentPageCallback(page + 1)}
                           className={`${styles.pagination__item} ${currentPage === page + 1 ? styles.pagination__item_active : styles.pagination__item}`}>
                    {page + 1}
                </li>
            })}
        </ul>
    </div>
}