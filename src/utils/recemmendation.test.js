import { getStockRecommendation, RECOMMENDATION } from './recommendation'

const MOCK_DATA = {
    HOLD_TEST_1: {
        price: [100, 120, 110, 115, 105, 100, 120, 110, 115, 105],
        socialMediaCount: [50, 55, 60, 65, 70, 50, 55, 60, 65, 70],
    },
    HOLD_TEST_2: {
        price: [100, 120, 110, 115, 105, 200, 220, 210, 215, 205],
        socialMediaCount: [50, 55, 60, 65, 70, 50, 55, 60, 65, 70],
    },
    HOLD_TEST_3: {
        price: [100, 120, 110, 115, 105, 200, 220, 210, 215, 205],
        socialMediaCount: [50, 55, 60, 65, 70, 0, 0, 0, 0, 0],
    },
}

jest.mock('../data/api', () => {
    const originalModule = jest.requireActual('../data/api')

    return {
        __esModule: true,
        ...originalModule,
        getStockPricesForLast10Days: (stockSymbol) =>
            MOCK_DATA[stockSymbol].price,
        getStockSocialMediaCountForLast10Days: (stockSymbol) =>
            MOCK_DATA[stockSymbol].socialMediaCount,
    }
})

describe('getStockRecommendation', () => {
    it('should return HOLD if prices and social media counts are stable', async () => {
        const recommendation = await getStockRecommendation('HOLD_TEST_1')
        expect(recommendation).toBe(RECOMMENDATION.HOLD)
    })

    it('should return HOLD if prices are increasing and social media counts are stable', async () => {
        const recommendation = await getStockRecommendation('HOLD_TEST_2')
        expect(recommendation).toBe(RECOMMENDATION.HOLD)
    })

    it('should return HOLD if prices are increasing and social media counts are decreasing', async () => {
        const recommendation = await getStockRecommendation('HOLD_TEST_3')
        expect(recommendation).toBe(RECOMMENDATION.HOLD)
    })
})
