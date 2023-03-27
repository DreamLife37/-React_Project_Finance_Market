export const selectorDividends = (state: AppRootStateType) => state.stockInfo.stockInfoData.dividends
export const selectorNews = (state: AppRootStateType) => state.stockInfo.stockInfoData.quoteAndNews.news
export const selectorQuote = (state: AppRootStateType) => state.stockInfo.stockInfoData.quoteAndNews.quote
export const selectorLogoURL = (state: AppRootStateType) => state.stockInfo.logoURL
export const selectorCurrentStock = (state: AppRootStateType) => state.stockInfo.currentStock
export const selectorLoadingDividends = (state: AppRootStateType) => state.stockInfo.isLoadingDividends
export const selectorLoadingQuoteAndNews = (state: AppRootStateType) => state.stockInfo.isLoadingQuoteAndNews

