export const RECOMMENDATION = {
    BUY: 'BUY',
    SELL: 'SELL',
    HOLD: 'HOLD',
}

export const getStockRecommendation = (
    priceChangePercentage,
    socialMediaCountChangePercentage
) => {
    const percentagePriceChangeThreshold = 5
    const percentageSocialMediaCountChangeThreshold = 10

    if (
        Math.abs(priceChangePercentage) < percentagePriceChangeThreshold ||
        Math.abs(socialMediaCountChangePercentage) <
            percentageSocialMediaCountChangeThreshold
    ) {
        // If the price change is less than 5% or social media count change is less than 10%,
        return RECOMMENDATION.HOLD
    } else if (
        priceChangePercentage > 0 &&
        socialMediaCountChangePercentage > 0
    ) {
        // If the price change is greater than 5% and social media count change is greater than 10%,
        // Positive sentiment
        return RECOMMENDATION.BUY
    } else if (
        priceChangePercentage < 0 &&
        socialMediaCountChangePercentage < 0
    ) {
        // If the price decreases by more than 5% and social media count also decreases by more than 10%,
        // Negative sentiment
        return RECOMMENDATION.SELL
    } else if (
        priceChangePercentage < 0 &&
        socialMediaCountChangePercentage > 0
    ) {
        // If the price decreases by more than 5% and social media count increases by more than 10%,
        // Something wrong with the stock as price decreased rapidly and lot of people are talking about it.
        return RECOMMENDATION.SELL
    } else {
        // If the price change and social media count change are in opposite direction,
        return RECOMMENDATION.HOLD
    }
}
