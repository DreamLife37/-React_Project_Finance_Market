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
import {Pagination} from "shared/ui/pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "widgets/header/Header";

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

    const {currentData, totalPages} = usePagination(reportsData, 10, currentPage)

    return <div>
        <Header/>
        <section className={styles.tableContainer}>
            {error
                ? <div className={styles.error}>{error}</div>
                : reportsData &&
                <div className={styles.tableWrapper}>
                    <Table isLoading={isLoading} data={currentData} columns={columns}/>
                    <Pagination totalPages={totalPages} currentPageCallback={currentPageCallback}
                                currentPage={currentPage}/>
                </div>}
        </section>
    </div>
}