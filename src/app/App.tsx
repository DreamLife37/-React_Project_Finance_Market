import React, {useEffect} from 'react';
import {fetchAllReportsTC} from 'widgets/table';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {HomePage} from "pages/home";
import {fetchDividendsTC, fetchQuoteAndNewsTC, selectorCurrentStock} from "widgets/stockInfo";

function App() {
    const currentStock = useSelector(selectorCurrentStock)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllReportsTC())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchQuoteAndNewsTC())
        dispatch(fetchDividendsTC())
    }, [currentStock])

    return (
        <HomePage/>
    );
}

export default App;
