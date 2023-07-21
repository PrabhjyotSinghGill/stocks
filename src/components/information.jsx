import React, { useEffect } from 'react'
import '../views/header.css'
import '../views/information.css'
import { AppContext } from '../context/app-context'
import { getNameFromSymbol } from '../data/api'

function Information() {
    const { selectedStockSymbol } = React.useContext(AppContext)

    const [selectedStockName, setSelectedStockName] = React.useState()
    const [errorMessage, setErrorMessage] = React.useState()
    useEffect(() => {
        setErrorMessage()
        if (selectedStockSymbol) {
            const fun = async () => {
                try {
                    let stockName = await getNameFromSymbol(selectedStockSymbol)
                    setSelectedStockName(stockName)
                } catch (e) {
                    setErrorMessage(e)
                }
            }
            fun()
        }
    }, [selectedStockSymbol])

    return (
        <div className="information">
            {errorMessage ? (
                <div className="infoHeader">{errorMessage}</div>
            ) : (
                <div className="infoHeader">
                    {selectedStockName}
                    {selectedStockSymbol}
                </div>
            )}
        </div>
    )
}

export default Information
