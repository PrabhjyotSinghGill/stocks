import * as React from 'react'
import '../views/infoTable.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(
    date,
    openPrice,
    high,
    low,
    closePrice,
    volume,
    socialMediaCount
) {
    return { date, openPrice, high, low, closePrice, volume, socialMediaCount }
}

const rows = [
    createData('2023-07-11', 100, 105, 95, 103, 5000, 0),
    createData('2023-07-12', 100, 105, 95, 103, 5000, 0),
    createData('2023-07-13', 100, 105, 95, 103, 5000, 0),
    createData('2023-07-13', 100, 105, 95, 103, 5000, 0),
    createData('2023-07-13', 100, 105, 95, 103, 5000, 0),
    createData('2023-07-13', 100, 105, 95, 103, 5000, 0),
    createData('2023-07-13', 100, 105, 95, 103, 5000, 0),
    createData('2023-07-13', 100, 105, 95, 103, 5000, 0),
    createData('2023-07-13', 100, 105, 95, 103, 5000, 0),
    createData('2023-07-13', 100, 105, 95, 103, 5000, 0),
]

export default function InfoTable() {
    return (
        <div className="container">
            <div>Market Summary &gt; Toronto Stock Exchange [TSX]</div>
            <TableContainer component={Paper} className="infoTable">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">
                                Open Price&nbsp;($)
                            </TableCell>
                            <TableCell align="right">High&nbsp;($)</TableCell>
                            <TableCell align="right">Low&nbsp;($)</TableCell>
                            <TableCell align="right">
                                Close Price&nbsp;($)
                            </TableCell>
                            <TableCell align="right">Volume</TableCell>
                            <TableCell align="right">
                                Social Media Count
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="right">
                                    {row.openPrice}
                                </TableCell>
                                <TableCell align="right">{row.high}</TableCell>
                                <TableCell align="right">{row.low}</TableCell>
                                <TableCell align="right">
                                    {row.closePrice}
                                </TableCell>
                                <TableCell align="right">
                                    {row.volume}
                                </TableCell>
                                <TableCell align="right">
                                    {row.socialMediaCount}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
