/**
 * Although we have generated the dummy data and would be directly using it in the application.
 * But in real world applications, we would be fetching the data from an API.
 * Thus to simulate the same, we have created a mock API.
 * This mock api would return promise which would resolve to the dummy data similar
 * to how a real API would return.
 */

import { stockPrices } from './stock-price'
import { stockSocialMediaCount } from './stock-social-media-count'

export const getStockPricesForLast10Days = (stockSymbol) => {
    // Returns a promise which immediately resolves to the dummy data.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stockPrices[stockSymbol])
        })
    })
}

export const getStockSocialMediaCountForLast10Days = (stockSymbol) => {
    // Returns a promise which immediately resolves to the dummy data.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stockSocialMediaCount[stockSymbol])
        })
    })
}
