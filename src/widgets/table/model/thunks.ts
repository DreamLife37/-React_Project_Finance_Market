import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../api/getReportsData";
import {AxiosError} from "axios";
import {ModelReportDataType} from "./types";

export const fetchAllReportsTC = createAsyncThunk<ModelReportDataType[], undefined, { rejectValue: string }>(
    'reports/getAllReports',
    async (_, thunkAPI) => {
        try {
            const response = await api.get()
            return response.data.map((report, index) => {
                return {
                    id: index + 1,
                    tradingSymbol: report.TradingSymbol,
                    entityName: report.entityName,
                    documentPeriodEndDate: report.DocumentPeriodEndDate,
                    revenueFromContractWithCustomerExcludingAssessedTax: report.RevenueFromContractWithCustomerExcludingAssessedTax,
                    operatingIncomeLoss: report.OperatingIncomeLoss,
                    netIncomeLoss: report.NetIncomeLoss,
                    earningsPerShareDiluted: report.EarningsPerShareDiluted
                }
            })
        } catch (err) {
            const error = err as AxiosError<Error>;
            if (error.response?.data) {
                return thunkAPI.rejectWithValue(JSON.stringify(error.response?.data))
            }
            return thunkAPI.rejectWithValue('Не удалось загрузить данные')
        }
    })