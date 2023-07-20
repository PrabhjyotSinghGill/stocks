import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { TextField } from '@mui/material'
import { AppContext } from '../context/app-context'
import '../views/search.css'

function Search() {
    let [stockSymbol, setStockSymbol] = React.useState('')
    const { setSelectedStockSymbol } = React.useContext(AppContext)

    return (
        <div className="search">
            <TextField
                className="searchQuery"
                id="standard-basic"
                placeholder="Search for a stock symbol listed on the TSX..."
                variant="standard"
                InputProps={{ disableUnderline: true }}
                onChange={(e) => setStockSymbol(e.target.value.toUpperCase())}
                value={stockSymbol}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setSelectedStockSymbol(stockSymbol)
                    }
                }}
            />
            <ButtonGroup variant="text" className="searchButton">
                <Button onClick={() => setStockSymbol('')}>
                    <CloseIcon></CloseIcon>
                </Button>
                <Button onClick={() => setSelectedStockSymbol(stockSymbol)}>
                    <SearchIcon></SearchIcon>
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Search
