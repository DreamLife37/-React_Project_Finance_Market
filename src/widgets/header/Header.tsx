import styles from './Header.module.scss'
import {FC} from "react";

export const Header: FC = () => {
    console.log('render')
    return <div className={styles.header}>
        <img src="https://iexcloud.io/documentation/_static/logo-black.svg" alt="Logo" className={styles.logo}/>
        <div>Отчеты по компаниям</div>
    </div>
}