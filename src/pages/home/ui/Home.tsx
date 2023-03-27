import {
    selectorCurrentPage,
    selectorError,
    selectorLoading,
    selectorReportsData,
    setCurrentPage,
    Table,
    usePagination
} from "widgets/table";
import styles from './Home.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentStock, StockInfo} from "widgets/stockInfo";
import {Pagination} from "shared";
import { Header } from "widgets/header";

export const HomePage = () => {

    const columns = [
        {label: "№", accessor: "id"},
        {label: "Тикер", accessor: "tradingSymbol"},
        {label: "Название компании", accessor: "entityName"},
        {label: "Период до", accessor: "documentPeriodEndDate"},
        {label: "Общий доход", accessor: "revenueFromContractWithCustomerExcludingAssessedTax"},
        {label: "Операционные доходы", accessor: "operatingIncomeLoss"},
        {label: "Чистая прибыль", accessor: "netIncomeLoss"},
        {label: "Прибыль на акцию", accessor: "earningsPerShareDiluted"},
    ];

    const reportsData = useSelector(selectorReportsData)
    const error = useSelector(selectorError)
    const isLoading = useSelector(selectorLoading)
    const currentPage = useSelector(selectorCurrentPage)
    const dispatch = useDispatch()

    const currentPageCallback = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    const currentSymbolCallback = (symbol: string) => {
        dispatch(setCurrentStock(symbol))
    }

    const {currentData, totalPages} = usePagination(reportsData, 10, currentPage)

    return <div className={styles.home}>
        <Header/>
        <section className={styles.tableContainer}><StockInfo/></section>
        <section className={styles.tableContainer}>
            {error
                ? <div className={styles.error}>{error}</div>
                : reportsData &&
                <div className={styles.tableWrapper}>
                    <Table isLoading={isLoading} data={currentData} columns={columns}
                           onClickSymbol={currentSymbolCallback}/>
                    <Pagination totalPages={totalPages} currentPageCallback={currentPageCallback}
                                currentPage={currentPage}/>
                </div>}
        </section>
    </div>
}