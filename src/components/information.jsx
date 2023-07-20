import React, { useEffect } from 'react'
import '../views/header.css'
import '../views/information.css'
import { getStockRecommendation } from '../utils/recommendation'
import { AppContext } from '../context/app-context'

function Information() {
    const { selectedStockSymbol } = React.useContext(AppContext)

    const [stockRecommendation, setStockRecommendation] = React.useState()
    useEffect(() => {
        if (selectedStockSymbol) {
            const updateStockRecommendation = async () => {
                let result = await getStockRecommendation(selectedStockSymbol)
                setStockRecommendation(result)
            }
            updateStockRecommendation()
        }
    }, [selectedStockSymbol])

    return (
        <div className="information">
            {stockRecommendation && (
                <div className="infoHeader">
                    Recommendation for {selectedStockSymbol}:{' '}
                    {stockRecommendation}
                </div>
            )}
        </div>
    )
}

export default Information
