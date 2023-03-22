import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialStateType, ModelReportDataType} from "./types";
import {fetchAllReportsTC} from "./thunks";

const initialState: InitialStateType = {
    reportsData: [],
    isLoading: false,
    error: '',
    currentPage: 1
}

export const reportsDataSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        }
    },
    extraReducers: {
        [fetchAllReportsTC.pending.type]: (state) => {
            state.isLoading = true
            state.reportsData = []
        },
        [fetchAllReportsTC.fulfilled.type]: (state, action: PayloadAction<ModelReportDataType[]>) => {
            state.isLoading = false
            state.error = ''
            state.reportsData = action.payload
        },
        [fetchAllReportsTC.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
            state.reportsData = []
        },
    }
})

export const {setCurrentPage} = reportsDataSlice.actions

export const reportsReducer = reportsDataSlice.reducer