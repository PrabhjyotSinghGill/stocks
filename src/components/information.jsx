import React from 'react'
import '../views/header.css'
import '../views/information.css'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

function Information() {
    return (
        <div className="information">
            <div className="infoHeader">
                iShares NASDAQ 100 Index ETF (CAD-Hedged)
            </div>
            <Stack spacing={3} direction="row" className="stack">
                <Button variant="outlined" className="infoButton">
                    Overview
                </Button>
                <Button variant="outlined" className="infoButton">
                    Compare
                </Button>
            </Stack>
        </div>
    )
}

export default Information
