import {
    getStockPricesForLast10Days,
    getStockSocialMediaCountForLast10Days,
} from '../data/api'

export const RECOMMENDATION = {
    BUY: 'BUY',
    SELL: 'SELL',
    HOLD: 'HOLD',
}

export async function getStockRecommendation(stockSymbol) {
    let stockPriceList = await getStockPricesForLast10Days(stockSymbol)
    let stockSocialMediaCountList = await getStockSocialMediaCountForLast10Days(
        stockSymbol
    )

    let averageStockPriceFirstHalf = getAverage(
        stockPriceList.slice(0, Math.floor(stockPriceList.length / 2))
    )
    let averageStockPriceSecondHalf = getAverage(
        stockPriceList.slice(
            Math.floor(stockPriceList.length / 2),
            stockPriceList.length
        )
    )

    let averageSocialMediaCountFirstHalf = getAverage(
        stockSocialMediaCountList.slice(
            0,
            Math.floor(stockSocialMediaCountList.length / 2)
        )
    )
    let averageSocialMediaCountSecondHalf = getAverage(
        stockSocialMediaCountList.slice(
            Math.floor(stockSocialMediaCountList.length / 2),
            stockSocialMediaCountList.length
        )
    )

    if (
        areWithinDefinedPercent(
            averageStockPriceFirstHalf,
            averageStockPriceSecondHalf,
            5
        )
    ) {
        if (
            areWithinDefinedPercent(
                averageSocialMediaCountFirstHalf,
                averageSocialMediaCountSecondHalf,
                5
            )
        ) {
            // price stays same
            // social media count stays same
            // Nothing can be determined about public sentiment
            return RECOMMENDATION.HOLD
        } else if (
            averageSocialMediaCountSecondHalf > averageSocialMediaCountFirstHalf
        ) {
            // price stays same
            // social media count increases
            // public sentiment is positive
            return RECOMMENDATION.BUY
        } else {
            // price stays same
            // social media count decreases
            // public sentiment is negative
            return RECOMMENDATION.SELL
        }
    } else if (averageStockPriceSecondHalf > averageStockPriceFirstHalf) {
        if (
            areWithinDefinedPercent(
                averageSocialMediaCountFirstHalf,
                averageSocialMediaCountSecondHalf,
                5
            )
        ) {
            // price increases
            // social media count stays same
            // Although price goes up but public sentiment is neutral, so nothing can be determined
            return RECOMMENDATION.HOLD
        } else if (
            averageSocialMediaCountSecondHalf > averageSocialMediaCountFirstHalf
        ) {
            // price increases
            // social media count increases
            // price goes up and public sentiment is positive
            return RECOMMENDATION.BUY
        } else {
            // price increases
            // social media count decreases
            // price & public sentiment contradict each other, so nothing can be determined
            return RECOMMENDATION.HOLD
        }
    } else {
        if (
            areWithinDefinedPercent(
                averageSocialMediaCountFirstHalf,
                averageSocialMediaCountSecondHalf,
                5
            )
        ) {
            // price decreases
            // social media count stays same
            // price goes down and public sentiment is neutral, so nothing can be determined
            return RECOMMENDATION.HOLD
        } else if (
            averageSocialMediaCountSecondHalf > averageSocialMediaCountFirstHalf
        ) {
            // price decreases
            // social media count increases
            // price is down and lots of people are talking about it, so sentiment would be negative
            return RECOMMENDATION.SELL
        } else {
            // price decreases
            // social media count decreases
            // price goes down and less people are talking about it, so stock is going into oblivion
            return RECOMMENDATION.SELL
        }
    }
}

function getAverage(array) {
    return array.reduce((a, b) => a + b) / array.length
}

/**
 *
 * returns true if the larger number is within the defined percentage of the smaller number
 */
function areWithinDefinedPercent(firstNumber, secondNumber, percentage) {
    let difference = Math.abs(firstNumber - secondNumber)
    let differencePercentage =
        (difference / Math.min(firstNumber, secondNumber)) * 100
    return differencePercentage <= percentage
}
