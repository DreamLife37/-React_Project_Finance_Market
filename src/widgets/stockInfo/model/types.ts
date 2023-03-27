import {DividendsDataType} from "entities/dividends/model/types"
import {NewsDataType} from "entities/news/model/types"
import {QuoteDataType} from "entities/quote/model/types"

export type InitialStateType = {
    stockInfoData: StockInfoType,
    isLoadingDividends: boolean,
    isLoadingQuoteAndNews: boolean,
    error: string
    currentStock: string
    logoURL: string
}

export type Error = {
    name: string;
    message: string;
    stack?: string;
    error: string
}

export type StockInfoType = {
    quoteAndNews: {
        quote: QuoteDataType
        news: NewsDataType[]
    }
    dividends: DividendsDataType[]
}

export type QuoteAndNewsType = {
    quote: QuoteDataType
    news: NewsDataType[]
}

export type LogoType = {
    "url": string
}


