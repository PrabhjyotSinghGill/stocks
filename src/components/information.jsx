import React, { useEffect } from 'react'
import '../views/header.css'
import '../views/information.css'
import { getStockRecommendation } from '../utils/recommendation'
import { AppContext } from '../context/app-context'
import { getNameFromSymbol } from '../data/api'

function Information() {
    const { selectedStockSymbol } = React.useContext(AppContext)

    const [stockRecommendation, setStockRecommendation] = React.useState()
    const [selectedStockName, setSelectedStockName] = React.useState()
    const [errorMessage, setErrorMessage] = React.useState()
    useEffect(() => {
        setErrorMessage()
        if (selectedStockSymbol) {
            const updateStockRecommendation = async () => {
                try {
                    let stockName = await getNameFromSymbol(selectedStockSymbol)
                    setSelectedStockName(stockName)
                    let result = await getStockRecommendation(
                        selectedStockSymbol
                    )
                    setStockRecommendation(result)
                } catch (e) {
                    setErrorMessage(e)
                }
            }
            updateStockRecommendation()
        }
    }, [selectedStockSymbol])

    return (
        <div className="information">
            {errorMessage ? (
                <div className="infoHeader">{errorMessage}</div>
            ) : (
                stockRecommendation && (
                    <div className="infoHeader">
                        {selectedStockName}({selectedStockSymbol}
                        ): {stockRecommendation}
                    </div>
                )
            )}
        </div>
    )
}

export default Information
