import React, {useEffect} from 'react';
import './App.css';
import {fetchAllReportsTC} from 'widgets/table';
import {HomePage} from "pages/home/ui/Home";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";


function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllReportsTC())
    }, [dispatch])

    return (
        <HomePage/>
    );
}

export default App;
