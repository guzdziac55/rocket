import React, { useState, useMemo } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { Box, Paper, SelectChangeEvent } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Pagination from './Pagination'
import TableHeader from './TableHeader'
import RowItem from './RowItem'
import paginateRows from './helpers/paginate'
import sortRows from './helpers/sort'
import filterData from './helpers/filter'
import { Data, SortKeys, SortOrder } from './types'
import { useQuery } from 'react-query'

interface HeadItem {
    id: SortKeys
    label: string
    numeric: boolean
}

const headItems: readonly HeadItem[] = [
    {
        id: 'id',
        label: 'id',
        numeric: true,
    },
    {
        id: 'mission_name',
        label: 'name',
        numeric: false,
    },
    {
        id: 'launch_date_utc',
        label: 'date',
        numeric: false,
    },
]

interface MuiTableProps {
    data2: Data
}

const MuiTable: React.FC<MuiTableProps> = ({ data2 }) => {
    // const queryClient = useQueryClient()

    const { isLoading, error, data, isFetching } = useQuery('tableData', () =>
        fetch('https://mocki.io/v1/e139fed9-43a0-4059-9bae-0665e7965778').then(
            (res) => res.json()
        )
    )

    console.log('data from query')
    console.log(data)

    console.log(isLoading)
    console.log(error)
    console.log(isFetching)

    const [activePage, setActivePage] = useState<number>(1)
    const [filterValue, setFilterValue] = useState<string>('')
    const [filterBy, setFilterBy] = useState<SortKeys>('mission_name')
    // sort state
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc') // change to sort order
    const [sortBy, setSortBy] = useState<SortKeys>('id')

    const handleSort = (property: SortKeys) => {
        setActivePage(1)
        const isAsc = sortBy === property && sortOrder === 'asc'
        setSortOrder(isAsc ? 'desc' : 'asc')
        setSortBy(property)
    }

    function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
        setActivePage(1)
        const { value } = e.target
        setFilterValue(value)
    }

    function handleFilterBy(e: SelectChangeEvent) {
        setActivePage(1)
        setFilterValue('')
        const value = e.target.value as
            | 'launch_date_utc'
            | 'mission_name'
            | 'id'
        setFilterBy(value)
    }
    const rowsPerPage: number = 10

    const filteredData = useMemo(
        () => filterData(data2, filterValue, filterBy),
        [data2, filterValue, filterBy]
    )
    const sortabledData = useMemo(
        () => sortRows(filteredData, sortOrder, sortBy),
        [filteredData, sortOrder, sortBy]
    )

    const paginatedData = useMemo(
        () => paginateRows(sortabledData, activePage, rowsPerPage),
        [sortabledData, activePage, rowsPerPage]
    )

    const dataCount = sortabledData.length
    const totalPages: number = Math.ceil(dataCount / rowsPerPage)

    let textFilterHint: string
    switch (filterBy) {
        case 'id':
            textFilterHint = 'Type id'
            break
        case 'mission_name':
            textFilterHint = 'Type mission name'
            break
        case 'launch_date_utc':
            textFilterHint = 'Type date format: yyyy-mm-dd'
            break
        default:
            textFilterHint = 'Type id'
    }

    return (
        <Box
            mt={5}
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
            <Paper
                sx={{
                    width: '100%',
                    mb: 2,
                    maxWidth: '1250px',
                }}
            >
                <h3>Filter data</h3>
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">
                            Find:
                        </InputLabel>
                        <Select
                            sx={{ minWidth: '460px' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="filter"
                            onChange={handleFilterBy}
                            value={filterBy}
                        >
                            <MenuItem value="id">id</MenuItem>
                            <MenuItem value="mission_name">name</MenuItem>
                            <MenuItem value="launch_date_utc">date</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <TextField
                            helperText={textFilterHint}
                            id="demo-helper-text-aligned"
                            value={filterValue}
                            onChange={handleFilter}
                        />
                    </FormControl>
                </Stack>
                <Table sx={{ mb: 5 }}>
                    <TableHeader
                        onHandleSort={handleSort}
                        sortBy={sortBy}
                        sortOrder={sortOrder}
                        headerItems={headItems}
                    />
                    <TableBody>
                        {paginatedData.map((item) => (
                            <RowItem item={item}></RowItem>
                        ))}
                    </TableBody>
                </Table>
                <Pagination
                    activePage={activePage}
                    totalPages={totalPages}
                    onPageChange={setActivePage}
                />
            </Paper>
        </Box>
    )
}

export default MuiTable
