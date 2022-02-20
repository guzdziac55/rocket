import { Data, SortKeys } from '../types'
import { convertUTCDate } from '../helpers'

function filterData(data: Data, filter: string, filterBy: SortKeys): Data {
    if (filter === '') return data

    const filteredData: Data = data.filter((item) => {
        if (filterBy === 'id') {
            console.log('czy szuka tu ')
            //   return item[filterBy] === filter;   // ext the same
            return item[filterBy].includes(filter) // includes
        }
        if (filterBy === 'mission_name') {
            return item[filterBy]
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase())
        }
        if (filterBy === 'launch_date_utc') {
            //   return convertUTCDate(item[filterBy]) === filter;    // ext the same
            return convertUTCDate(item[filterBy]).includes(filter) // include
        }
        return filteredData
    })
    return filteredData
}

export default filterData
