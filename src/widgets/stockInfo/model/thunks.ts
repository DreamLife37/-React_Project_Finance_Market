import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {Error, InitialStateType, QuoteAndNewsType} from "./types";
import {api} from "../api/getStockInfo";
import {handleError} from "widgets/table/lib/utils/handleError";
import {setLogoStock} from "./slice";
import {DividendsDataType} from "entities/dividends";


export const fetchQuoteAndNewsTC = createAsyncThunk<QuoteAndNewsType, undefined, { rejectValue: string | Error, state: { stockInfo: InitialStateType } }>(
    'stockInfo/getQuoteAndNews',
    async (_, thunkAPI) => {
        try {
            const currentStock = thunkAPI.getState().stockInfo.currentStock
            const resQuoteAndNews = await api.getQuoteAndNews(currentStock)
            const resLogo = await api.getLogo(currentStock)
            thunkAPI.dispatch(setLogoStock(resLogo.data.url))
            console.log('resQuoteAndNews.data', resQuoteAndNews.data)
            return resQuoteAndNews.data

        } catch (err) {
            const error = err as AxiosError<Error>;
            return thunkAPI.rejectWithValue(handleError(error))
        }
    })

export const fetchDividendsTC = createAsyncThunk<DividendsDataType[], undefined, { rejectValue: string | Error, state: { stockInfo: InitialStateType } }>(
    'stockInfo/getDividends',
    async (_, thunkAPI) => {
        try {
            const currentStock = thunkAPI.getState().stockInfo.currentStock
            const resDividends = await api.getDividends(currentStock)
            console.log('resDividends.data', resDividends.data)
            return resDividends.data

        } catch (err) {
            const error = err as AxiosError<Error>;
            return thunkAPI.rejectWithValue(handleError(error))
        }
    })