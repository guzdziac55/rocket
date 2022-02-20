type Data = {
    id: string
    launch_date_utc: string
    mission_name: string
}[]

type DataItem = {
    id: string
    launch_date_utc: string
    mission_name: string
}

type SortKeys = keyof DataItem

type SortOrder = 'asc' | 'desc'

export type { Data, DataItem, SortKeys, SortOrder }
