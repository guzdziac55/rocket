import paginateRows from './paginate'
import { Data, SortKeys } from './../types'

const fakeData = [
    {
        launch_date_utc: '2014-01-06T18:06:00.000Z',
        mission_name: 'Thaicom 6',
        id: '13',
    },
    {
        launch_date_utc: '2014-09-07T05:00:00.000Z',
        mission_name: 'AsiaSat 6',
        id: '17',
    },
    {
        launch_date_utc: '2015-12-22T01:29:00.000Z',
        mission_name: 'OG-2 Mission 2',
        id: '25',
    },
]

describe('Testing paginateRows func:', () => {
    const array: Data = fakeData
    const activePage: number = 1
    const rowsPerPage: number = 10

    it('return single object ', () => {
        expect(paginateRows(array, activePage, rowsPerPage))
    })
})

// it('return two objects ', () => {
//     expect(filter(data, '2014', 'launch_date_utc').length).toEqual(2)
// })
// it('return empty array ', () => {
//     expect(filter(data, '2018', 'id')).toEqual([])
// })
