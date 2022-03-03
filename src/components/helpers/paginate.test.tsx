import paginateRows from './paginate'
import { mockData } from './mockData'

describe('paginateRows', () => {
    const activePage = 1
    const rowsPerPage = 10

    it('page: 1, rows per page: 10 returns 10 rows ', () => {
        expect(paginateRows(mockData, activePage, rowsPerPage).length).toEqual(
            10
        )
    })
    it('returns an empty array when the page is higher than maximum', () => {
        expect(paginateRows(mockData, 10000, rowsPerPage)).toEqual([])
    })
})
