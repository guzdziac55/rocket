import { Data, SortOrder, SortKeys } from '../types'

function sortRows(data: Data, sort: SortOrder, sortBy: SortKeys): Data {
    const reverse = sort === 'desc'
    let sortedData: Data = []

    if (sortBy === 'id') {
        sortedData = [...data].sort((a, b) =>
            Number(a[sortBy]) > Number(b[sortBy]) ? 1 : -1
        )
    } else {
        sortedData = data.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
    }

    if (reverse) return sortedData.reverse()
    return sortedData
}

export default sortRows
