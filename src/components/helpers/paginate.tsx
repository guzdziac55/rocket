import { Data } from '../types'

function paginateRows(array: Data, activePage: number, rowsPerPage: number):Data {
    return array.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage)
    // return [...array].slice(
    //     (activePage - 1) * rowsPerPage,
    //     activePage * rowsPerPage
    // )
}

export default paginateRows
