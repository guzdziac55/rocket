import { Data } from '../types'

function paginateRows(
    sortedRows: Data,
    activePage: number,
    rowsPerPage: number
) {
    return [...sortedRows].slice(
        (activePage - 1) * rowsPerPage,
        activePage * rowsPerPage
    )
}

export default paginateRows
