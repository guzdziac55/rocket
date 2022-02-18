// import Data {}[]
// active page number
// rowsPerPage : number
const fakeData = [
  {
    launch_date_utc: "2014-01-06T18:06:00.000Z",
    mission_name: "Thaicom 6",
    id: "13",
  },
  {
    launch_date_utc: "2014-09-07T05:00:00.000Z",
    mission_name: "AsiaSat 6",
    id: "17",
  },
  {
    launch_date_utc: "2015-12-22T01:29:00.000Z",
    mission_name: "OG-2 Mission 2",
    id: "25",
  },
];

type Data = typeof fakeData; // data type from fake data

// return data()

// interface paginateRowsProps {
//   sortedRows: Data;
//   activePage: number;
//   rowsPerPage: number;
// }

export function paginateRows(
  sortedRows: Data,
  activePage: number,
  rowsPerPage: number
) {
  return [...sortedRows].slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );
}

//  najpierw filtrowanie > jak przeflidrowanych jest kilka to
// wrzuć do posortowanych jak jest dużo i używam paginacji to >
// last state pagination >
