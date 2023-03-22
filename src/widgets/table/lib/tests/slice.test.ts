import {InitialStateType} from "../../model/types";
import {reportsReducer, setCurrentPage} from "../../model/slice";
import {fetchAllReportsTC} from "../../model/thunks"

jest.mock('axios');

let initialState: InitialStateType

beforeEach(() => {
    initialState = {
        reportsData: [],
        isLoading: false,
        error: '',
        currentPage: 1
    }
});

describe('reportsDataSlice', () => {

    it('return default state when action empty', () => {
        const result = reportsReducer(undefined, {type: ''})
        expect(result).toEqual(initialState)
    })

    it('set current page with "setCurrentPage"', () => {
        const action = {type: setCurrentPage.type, payload: 15}
        const result = reportsReducer(initialState, action)
        expect(result.currentPage).toEqual(15)
        expect(result.isLoading).toEqual(false)
    })

    it('set loading true when fetchAllReportsTC is pending', () => {
        const action = {type: fetchAllReportsTC.pending.type}
        const state = reportsReducer(initialState, action)
        expect(state.isLoading).toBe(true)
        expect(state.currentPage).toBe(1)
    })

    it('set reportsData when fetchAllReportsTC is fulfilled', () => {
        const mockData = [{
            tradingSymbol: 'AAPL',
            entityName: 'APPLE',
            documentPeriodEndDate: "2022-12-31",
            revenueFromContractWithCustomerExcludingAssessedTax: 1000000,
            operatingIncomeLoss: 100000,
            netIncomeLoss: 20000000,
            earningsPerShareDiluted: 2
        }]

        const action = {type: fetchAllReportsTC.fulfilled.type, payload: mockData}
        const state = reportsReducer(initialState, action)
        expect(state).toEqual({
            reportsData: mockData,
            isLoading: false,
            error: '',
            currentPage: 1
        })
    })

    it('set error when fetchAllReportsTC is rejected', () => {
        console.log(initialState)
        const action = {type: fetchAllReportsTC.rejected.type, payload: 'Не удалось загрузить данные'}
        const state = reportsReducer(initialState, action)
        expect(state).toEqual({
            reportsData: [],
            isLoading: false,
            error: 'Не удалось загрузить данные',
            currentPage: 1
        })
    })
})
