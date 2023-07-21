import { getStockRecommendation, RECOMMENDATION } from './recommendation'

describe('getStockRecommendation', () => {
    it('returns HOLD when price and social media count changes are within threshold', () => {
        const recommendation = getStockRecommendation(3, 8)
        expect(recommendation).toBe(RECOMMENDATION.HOLD)
    })

    it('returns HOLD when both price change and social media count change are negative but within threshold', () => {
        const recommendation = getStockRecommendation(-4, -8)
        expect(recommendation).toBe(RECOMMENDATION.HOLD)
    })

    it('returns BUY when price change exceeds threshold and positive social media count change', () => {
        const recommendation = getStockRecommendation(6, 15)
        expect(recommendation).toBe(RECOMMENDATION.BUY)
    })

    it('returns SELL both price and social media count decrease by more than threshold', () => {
        const recommendation = getStockRecommendation(-6, -11)
        expect(recommendation).toBe(RECOMMENDATION.SELL)
    })

    it('returns SELL when price decrease exceeds threshold and opposite direction social media count change', () => {
        const recommendation = getStockRecommendation(-10, 20)
        expect(recommendation).toBe(RECOMMENDATION.SELL)
    })

    it('returns HOLD when price change exceeds threshold and negative social media count change', () => {
        const recommendation = getStockRecommendation(7, -12)
        expect(recommendation).toBe(RECOMMENDATION.HOLD)
    })
})
