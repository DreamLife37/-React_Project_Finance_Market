import {selectorCurrentPage, selectorError, selectorLoading, selectorReportsData} from "../../model/selectors";

describe('selectorLoading', () => {
    test('work with true value', () => {
        expect(selectorLoading({
            reportData: {
                reportsData: Array(0),
                isLoading: true,
                error: '',
                currentPage: 1
            }
        })).toBe(true)
    })
    test('work with false value', () => {
        expect(selectorLoading({
            reportData: {
                reportsData: Array(0),
                isLoading: false,
                error: '',
                currentPage: 1
            }
        })).toBe(false)
    })
})

describe('selectorError', () => {
    test('work with empty value', () => {
        expect(selectorError({
            reportData: {
                reportsData: Array(0),
                isLoading: false,
                error: '',
                currentPage: 1
            }
        })).toBe('')
    })
    test('work with string value', () => {
        expect(selectorError({
            reportData: {
                reportsData: Array(0),
                isLoading: false,
                error: 'Error',
                currentPage: 1
            }
        })).toBe('Error')
    })
})

describe('selectorCurrentPage', () => {
    test('work with 0 value', () => {
        expect(selectorCurrentPage({
            reportData: {
                reportsData: Array(0),
                isLoading: false,
                error: '',
                currentPage: 0
            }
        })).toBe(0)
    })
    test('work with 15 value', () => {
        expect(selectorCurrentPage({
            reportData: {
                reportsData: Array(0),
                isLoading: false,
                error: '',
                currentPage: 15
            }
        })).toBe(15)
    })
})

describe('selectorReportsData', () => {
    test('work with empty value', () => {
        expect(selectorReportsData({
            reportData: {
                reportsData: Array(0),
                isLoading: false,
                error: '',
                currentPage: 0
            }
        })).toEqual([])
    })
    test('work with value', () => {
        expect(selectorReportsData({
            reportData: {
                reportsData: [{
                    tradingSymbol: 'AAPL',
                    entityName: 'APPLE',
                    documentPeriodEndDate: "2022-12-31",
                    revenueFromContractWithCustomerExcludingAssessedTax: 1000000,
                    operatingIncomeLoss: 100000,
                    netIncomeLoss: 20000000,
                    earningsPerShareDiluted: 2
                }], isLoading: false, error: '', currentPage: 0
            }
        })).toEqual([{
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