export const RECOMMENDATION = {
    BUY: 'BUY',
    SELL: 'SELL',
    HOLD: 'HOLD',
}

export function getStockRecommendation(priceChange, socialMediaCountChange) {
    return RECOMMENDATION.HOLD
}
