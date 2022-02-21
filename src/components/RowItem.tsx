import React from 'react'
import { TableCell, TableRow } from '@mui/material'
import { convertUTCDate } from './helpers'
import { DataItem } from './types'

interface RowItemProps {
    item: DataItem
}

const RowItem: React.FC<RowItemProps> = ({ item }) => {
    return (
        <>
            <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.mission_name}</TableCell>
                <TableCell>
                    {convertUTCDate(item.launch_date_utc, false)}
                </TableCell>
            </TableRow>
        </>
    )
}

export default RowItem
