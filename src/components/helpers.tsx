import moment from 'moment'

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

type Data = typeof fakeData

export function paginateRows(
    sortedRows: Data,
    activePage: number,
    rowsPerPage: number
) {
    return [...sortedRows].slice(
        (activePage - 1) * rowsPerPage,
        activePage * rowsPerPage
    )
}

export function convertUTCDate(
    dateUTC: string,
    dateOnly: boolean = true
): string {
    const format = dateOnly ? 'YYYY-MM-DD' : 'YYYY-MM-DD,   h:mm:ss a'

    return moment(dateUTC, 'YYYY-MM-DDTHH:mm:ssZ').local().format(format)
}

//  fake api link

// {
//     "id": 1,
//     "car_name": "Freelander",
//     "model_date": "2019-08-20T22:15:37Z"
//   }
// https://mocki.io/v1/e139fed9-43a0-4059-9bae-0665e7965778
