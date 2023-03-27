import {instance} from "shared/api/axiosInstance"
import {LogoType, QuoteAndNewsType} from "../model/types";
import {DividendsDataType} from "entities/dividends";

const TOKEN = process.env.REACT_APP_TOKEN

export const api = {
    async getQuoteAndNews(symbol: string) {
        return instance.get<QuoteAndNewsType>(`stock/${symbol}/batch?types=quote,news&range=5m&last=1&token=${TOKEN}`)
    },
    async getDividends(symbol: string) {
        return instance.get<DividendsDataType[]>(`stock/${symbol}/dividends/6m?last=2&token=${TOKEN}`)
    },
    async getLogo(symbol: string) {
        return instance.get<LogoType>(`stock/${symbol}/logo?token=${TOKEN}`)
    },
}