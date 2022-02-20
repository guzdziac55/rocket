import { Data, SortOrder, SortKeys } from '../types'

function sortRows(data: Data, sort: SortOrder, sortBy: SortKeys): Data {
    const reverse = sort === 'desc'
    let sortedData2: Data = []

    if (sortBy === 'id') {
        sortedData2 = data.sort((a, b) =>
            Number(a[sortBy]) > Number(b[sortBy]) ? 1 : -1
        )
    } else {
        sortedData2 = data.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
    }

    if (reverse) return sortedData2.reverse()
    return sortedData2
}

export default sortRows
