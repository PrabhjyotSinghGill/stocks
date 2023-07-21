import * as React from 'react'
import '../views/infoTable.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { AppContext } from '../context/app-context'
import { getDateBefore } from '../utils/date-util'
import {
    getNameFromSymbol,
    getStockPricesForLast10Days,
    getStockSocialMediaCountForLast10Days,
} from '../data/api'
import { getStockRecommendation } from '../utils/recommendation'

export default function InfoTable() {
    const { selectedStockSymbol } = React.useContext(AppContext)
    const [tableData, setTableData] = React.useState([])

    React.useEffect(() => {
        const updateTableData = async () => {
            try {
                const stockName = await getNameFromSymbol(selectedStockSymbol)
            } catch (e) {
                setTableData([])
                return
            }

            let stockPriceList = await getStockPricesForLast10Days(
                selectedStockSymbol
            )
            let stockSocialMediaCountList =
                await getStockSocialMediaCountForLast10Days(selectedStockSymbol)
            const rows = []
            for (let i = 0; i < 10; i++) {
                const price = stockPriceList[stockPriceList.length - 1 - i]
                const socialMediaCount =
                    stockSocialMediaCountList[
                        stockSocialMediaCountList.length - 1 - i
                    ]
                const priceDayBefore =
                    stockPriceList[Math.min(stockPriceList.length - 2 - i, 0)]
                const socialMediaCountDayBefore =
                    stockSocialMediaCountList[
                        Math.min(stockSocialMediaCountList.length - 2 - i, 0)
                    ]
                const recommendation = getStockRecommendation(
                    price - priceDayBefore,
                    socialMediaCount - socialMediaCountDayBefore
                )
                rows.push({
                    date: getDateBefore(i),
                    price,
                    socialMediaCount,
                    recommendation,
                })
            }

            setTableData(rows)
        }
        updateTableData()
    }, [selectedStockSymbol])

    return (
        <>
            {tableData.length > 0 && (
                <div className="container">
                    <div>Market Summary &gt; Toronto Stock Exchange [TSX]</div>(
                    <TableContainer component={Paper} className="infoTable">
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell align="right">
                                        Price&nbsp;($)
                                    </TableCell>
                                    <TableCell align="right">
                                        Social Media Count
                                    </TableCell>
                                    <TableCell align="right">
                                        Recommendation
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row) => (
                                    <TableRow
                                        key={row.date}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.date}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.price}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.socialMediaCount}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.recommendation}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    )
                </div>
            )}
        </>
    )
}
