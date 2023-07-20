import { Divider } from '@mui/material'
import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Information from './components/information'
import Graph from './components/graph'
import { AppContext } from './context/app-context'

function App() {
    const [selectedStockSymbol, setSelectedStockSymbol] = useState()

    return (
        <AppContext.Provider
            value={{ selectedStockSymbol, setSelectedStockSymbol }}
        >
            <div className="app">
                <Header></Header>
                <Divider></Divider>
                <Information></Information>
                <Divider></Divider>
                <Graph></Graph>
            </div>
        </AppContext.Provider>
    )
}

export default App
