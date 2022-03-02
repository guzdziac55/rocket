import filter from './filter'
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

describe('Testing filter func:', () => {
    const data: Data = fakeData
    const filters: string = '13'
    const filterBy: SortKeys = 'id'

    it('return single object ', () => {
        expect(filter(data, filters, filterBy)).toEqual([fakeData[0]])
    })
    it('return two objects ', () => {
        expect(filter(data, '2014', 'launch_date_utc').length).toEqual(2)
    })
    it('return empty array ', () => {
        expect(filter(data, '2018', 'id')).toEqual([])
    })
})
