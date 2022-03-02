import React from 'react'
import { SortKeys, SortOrder } from './types'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'

type HeadItem = {
    id: SortKeys
    label: string
    numeric: boolean
}

interface TableHeaderProps {
    onHandleSort: (property: SortKeys) => void
    sortBy: SortKeys
    sortOrder: SortOrder
    headerItems: readonly HeadItem[]
}

const TableHeader: React.FC<TableHeaderProps> = ({
    onHandleSort,
    sortBy,
    sortOrder,
    headerItems,
}) => {
    return (
        <TableHead>
            <TableRow>
                {headerItems.map((item) => (
                    <TableCell key={item.id}>
                        <TableSortLabel
                            active={sortBy === item.id}
                            direction={sortBy === item.id ? sortOrder : 'desc'}
                            onClick={() => onHandleSort(item.id)}
                        >
                            {item.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default TableHeader
