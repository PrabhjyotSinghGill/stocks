export const RECOMMENDATION = {
    BUY: 'BUY',
    SELL: 'SELL',
    HOLD: 'HOLD',
}

export const getStockRecommendation = (priceChange, socialMediaCountChange) => {
    if (priceChange > 0 && socialMediaCountChange > 0) {
        return RECOMMENDATION.BUY
    } else if (priceChange < 0 && socialMediaCountChange < 0) {
        return RECOMMENDATION.SELL
    } else {
        return RECOMMENDATION.HOLD
    }
}
