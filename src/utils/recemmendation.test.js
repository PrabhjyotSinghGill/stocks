import { getStockRecommendation, RECOMMENDATION } from './recommendation'

describe('getStockRecommendation', () => {
    it('should return BUY if price goes up and socialMediaCount goes up', async () => {
        const recommendation = await getStockRecommendation(10, 10)
        expect(recommendation).toBe(RECOMMENDATION.BUY)
    })

    it('should return SELL if prices goes down and social media count goes down', async () => {
        const recommendation = await getStockRecommendation(-10, -10)
        expect(recommendation).toBe(RECOMMENDATION.SELL)
    })
})
