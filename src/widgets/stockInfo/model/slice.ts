import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialStateType} from "./types";
import {fetchDividendsTC, fetchQuoteAndNewsTC} from "./thunks";
import {QuoteDataType} from "../../../entities/quote/model/types";

const initialState: InitialStateType = {
    stockInfoData: {
        quoteAndNews: {
            quote: {} as QuoteDataType,
            news: [],
        },
        dividends: []
    },
    isLoadingDividends: false,
    isLoadingQuoteAndNews: false,
    error: '',
    currentStock: 'ARL',
    logoURL: 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png'
}

const stockInfoSlice = createSlice({
    name: 'stockInfo',
    initialState,
    reducers: {
        setCurrentStock(state, action: PayloadAction<string>) {
            state.currentStock = action.payload
        },
        setLogoStock(state, action: PayloadAction<string>) {
            state.logoURL = action.payload
        }
    },
    extraReducers: {
        [fetchQuoteAndNewsTC.pending.type]: (state) => {
            state.isLoadingQuoteAndNews = true
            // state.stockInfoData.dividends = []
        },
        [fetchQuoteAndNewsTC.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.isLoadingQuoteAndNews = false
            state.error = ''
            console.log('action.payload', action.payload)
            state.stockInfoData.quoteAndNews = action.payload
        },
        [fetchQuoteAndNewsTC.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoadingQuoteAndNews = false
            state.error = action.payload
            // state.stockInfoData.dividends = []
        },
        [fetchDividendsTC.pending.type]: (state) => {
            state.isLoadingDividends = true
            // state.stockInfoData.dividends = []
        },
        [fetchDividendsTC.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.isLoadingDividends = false
            state.error = ''
            console.log('action.payload-div', action.payload)
            state.stockInfoData.dividends = action.payload
        },
        [fetchDividendsTC.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoadingDividends = false
            state.error = action.payload
            state.stockInfoData.dividends = []
        },
    }
})

export const {setCurrentStock, setLogoStock} = stockInfoSlice.actions

export const stockInfoReducer = stockInfoSlice.reducer