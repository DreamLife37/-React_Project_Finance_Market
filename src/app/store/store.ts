import {configureStore} from "@reduxjs/toolkit";
import {reportsReducer} from "widgets/table";

export const store = configureStore({
    reducer: {
        reportData: reportsReducer,
    }
});
