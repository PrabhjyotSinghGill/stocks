import { Divider } from '@mui/material'
import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Information from './components/information'
import { AppContext } from './context/app-context'
import InfoTable from './components/infoTable'

function App() {
    const [selectedStockSymbol, setSelectedStockSymbol] = useState()

    return (
        <AppContext.Provider
            value={{
                selectedStockSymbol,
                setSelectedStockSymbol,
            }}
        >
            <div className="app">
                <Header></Header>
                <Divider></Divider>
                <Information></Information>
                {selectedStockSymbol && (
                    <>
                        <Divider></Divider>
                        <InfoTable></InfoTable>
                    </>
                )}
            </div>
        </AppContext.Provider>
    )
}

export default App
