import {configureStore} from "@reduxjs/toolkit";
import {reportsReducer} from "widgets/table";
import {stockInfoReducer} from "widgets/stockInfo/model/slice";

export const store = configureStore({
    reducer: {
        reportData: reportsReducer,
        stockInfo: stockInfoReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
});
