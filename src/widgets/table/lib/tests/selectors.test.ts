import {selectorCurrentPage, selectorError, selectorLoading, selectorReportsData} from "../../model/selectors";
import {QuoteDataType} from "../../../../entities/quote/model/types";

describe('selectorLoading', () => {

    test('work with true value', () => {
        const state = {
            reportData: {
                reportsData: Array(0),
                isLoading: true,
                error: '',
                currentPage: 1
            },
            stockInfo: {
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
                currentStock: 'AAPL',
                logoURL: 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png'
            }
        }
        expect(selectorLoading(state)).toBe(true)
    })
    test('work with false value', () => {
        const state = {
            reportData: {
                reportsData: Array(0),
                isLoading: false,
                error: '',
                currentPage: 1
            },
            stockInfo: {
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
                currentStock: 'AAPL',
                logoURL: 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png'
            }
        }
        expect(selectorLoading(state)).toBe(false)
    })
})

describe('selectorError', () => {
    test('work with empty value', () => {
        const state = {
            reportData: {
                reportsData: Array(0),
                isLoading: true,
                error: '',
                currentPage: 1
            },
            stockInfo: {
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
                currentStock: 'AAPL',
                logoURL: 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png'
            }
        }
        expect(selectorError(state)).toBe('')
    })
    test('work with string value', () => {
        const state = {
            reportData: {
                reportsData: Array(0),
                isLoading: true,
                error: 'Error',
                currentPage: 1
            },
            stockInfo: {
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
                currentStock: 'AAPL',
                logoURL: 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png'
            }
        }
        expect(selectorError(state)).toBe('Error')
    })
})

describe('selectorCurrentPage', () => {
    test('work with 0 value', () => {
        const state = {
            reportData: {
                reportsData: Array(0),
                isLoading: true,
                error: '',
                currentPage: 0
            },
            stockInfo: {
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
                currentStock: 'AAPL',
                logoURL: 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png'
            }
        }
        expect(selectorCurrentPage(state)).toBe(0)
    })
    test('work with value', () => {
        const state = {
            reportData: {
                reportsData: Array(0),
                isLoading: true,
                error: '',
                currentPage: 15
            },
            stockInfo: {
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
                currentStock: 'AAPL',
                logoURL: 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png'
            }
        }
        expect(selectorCurrentPage(state)).toBe(15)
    })
})

describe('selectorReportsData', () => {
    test('work with empty value', () => {
        const state = {
            reportData: {
                reportsData: Array(0),
                isLoading: true,
                error: '',
                currentPage: 1
            },
            stockInfo: {
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
                currentStock: 'AAPL',
                logoURL: 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png'
            }
        }
        expect(selectorReportsData(state)).toEqual([])
    })
    test('work with value', () => {
        const state = {
            reportData: {
                reportsData: [{
                    tradingSymbol: 'AAPL',
                    entityName: 'APPLE',
                    documentPeriodEndDate: "2022-12-31",
                    revenueFromContractWithCustomerExcludingAssessedTax: 1000000,
                    operatingIncomeLoss: 100000,
                    netIncomeLoss: 20000000,
                    earningsPerShareDiluted: 2
                }],
                isLoading: true,
                error: '',
                currentPage: 1
            },
            stockInfo: {
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
                currentStock: 'AAPL',
                logoURL: 'https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png'
            }
        }
        expect(selectorReportsData(state)).toEqual([{
            tradingSymbol: 'AAPL',
            entityName: 'APPLE',
            documentPeriodEndDate: "2022-12-31",
            revenueFromContractWithCustomerExcludingAssessedTax: 1000000,
            operatingIncomeLoss: 100000,
            netIncomeLoss: 20000000,
            earningsPerShareDiluted: 2
        }])
    })
})