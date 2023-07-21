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
        return RECOMMENDATION.HOLD
    } else if (
        priceChangePercentage > 0 &&
        socialMediaCountChangePercentage > 0
    ) {
        return RECOMMENDATION.BUY
    } else if (
        priceChangePercentage < 0 &&
        socialMediaCountChangePercentage < 0
    ) {
        return RECOMMENDATION.SELL
    } else if (
        priceChangePercentage < 0 &&
        socialMediaCountChangePercentage > 0
    ) {
        return RECOMMENDATION.SELL
    } else {
        return RECOMMENDATION.HOLD
    }
}
