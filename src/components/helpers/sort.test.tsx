import sortRows from './sort'

const orginalData = [
    {
        launch_date_utc: '2006-03-24T22:30:00.000Z',
        mission_name: 'FalconSat',
        id: '1',
    },
    {
        launch_date_utc: '2012-10-08T00:35:00.000Z',
        mission_name: 'CRS-1',
        id: '9',
    },
    {
        launch_date_utc: '2013-09-29T16:00:00.000Z',
        mission_name: 'CASSIOPE',
        id: '11',
    },
]

describe('sort', () => {
    it('order: asc, by: id', () => {
        expect(sortRows(orginalData, 'asc', 'id')).toEqual([
            {
                launch_date_utc: '2006-03-24T22:30:00.000Z',
                mission_name: 'FalconSat',
                id: '1',
            },
            {
                launch_date_utc: '2012-10-08T00:35:00.000Z',
                mission_name: 'CRS-1',
                id: '9',
            },
            {
                launch_date_utc: '2013-09-29T16:00:00.000Z',
                mission_name: 'CASSIOPE',
                id: '11',
            },
        ])
    })
    it('order: desc, by: id', () => {
        expect(sortRows(orginalData, 'desc', 'id')).toEqual([
            {
                launch_date_utc: '2013-09-29T16:00:00.000Z',
                mission_name: 'CASSIOPE',
                id: '11',
            },
            {
                launch_date_utc: '2012-10-08T00:35:00.000Z',
                mission_name: 'CRS-1',
                id: '9',
            },
            {
                launch_date_utc: '2006-03-24T22:30:00.000Z',
                mission_name: 'FalconSat',
                id: '1',
            },
        ])
    })
    it('order: asc, by: mission_name', () => {
        expect(sortRows(orginalData, 'asc', 'mission_name')).toEqual([
            {
                launch_date_utc: '2013-09-29T16:00:00.000Z',
                mission_name: 'CASSIOPE',
                id: '11',
            },
            {
                launch_date_utc: '2012-10-08T00:35:00.000Z',
                mission_name: 'CRS-1',
                id: '9',
            },
            {
                launch_date_utc: '2006-03-24T22:30:00.000Z',
                mission_name: 'FalconSat',
                id: '1',
            },
        ])
    })
    it('order: desc, by: mission_name', () => {
        expect(sortRows(orginalData, 'desc', 'mission_name')).toEqual([
            {
                launch_date_utc: '2006-03-24T22:30:00.000Z',
                mission_name: 'FalconSat',
                id: '1',
            },
            {
                launch_date_utc: '2012-10-08T00:35:00.000Z',
                mission_name: 'CRS-1',
                id: '9',
            },
            {
                launch_date_utc: '2013-09-29T16:00:00.000Z',
                mission_name: 'CASSIOPE',
                id: '11',
            },
        ])
    })
    it('order: asc, by: launch_date_utc', () => {
        expect(sortRows(orginalData, 'asc', 'launch_date_utc')).toEqual([
            {
                launch_date_utc: '2006-03-24T22:30:00.000Z',
                mission_name: 'FalconSat',
                id: '1',
            },
            {
                launch_date_utc: '2012-10-08T00:35:00.000Z',
                mission_name: 'CRS-1',
                id: '9',
            },
            {
                launch_date_utc: '2013-09-29T16:00:00.000Z',
                mission_name: 'CASSIOPE',
                id: '11',
            },
        ])
    })
    it('order: desc, by: launch_date_utc', () => {
        expect(sortRows(orginalData, 'desc', 'launch_date_utc')).toEqual([
            {
                launch_date_utc: '2013-09-29T16:00:00.000Z',
                mission_name: 'CASSIOPE',
                id: '11',
            },
            {
                launch_date_utc: '2012-10-08T00:35:00.000Z',
                mission_name: 'CRS-1',
                id: '9',
            },
            {
                launch_date_utc: '2006-03-24T22:30:00.000Z',
                mission_name: 'FalconSat',
                id: '1',
            },
        ])
    })
})
