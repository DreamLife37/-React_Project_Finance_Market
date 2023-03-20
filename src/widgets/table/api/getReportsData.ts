import {instance} from "shared/api/axiosInstance"
import {ReportDataType} from "../model/types";

const TOKEN = process.env.REACT_APP_TOKEN

export const api = {
    async get() {
        return instance.get<ReportDataType[]>(`data/CORE/REPORTED_FINANCIALS?last=100&token=${TOKEN}`)
    }
}