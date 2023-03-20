export const selectorReportsData = (state: AppRootStateType) => state.reportData.reportsData
export const selectorLoading = (state: AppRootStateType) => state.reportData.isLoading
export const selectorError = (state: AppRootStateType) => state.reportData.error
export const selectorCurrentPage = (state: AppRootStateType) => state.reportData.currentPage
