import React, { useState, useCallback } from "react";
import Pagination from "./Pagination";
import classes from "./SortableTable.module.css";
import { filterByValue } from "./help";
import { paginateRows } from "./helpers";

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

// set types and functional component interface

type Data = typeof fakeData; // data type from fake data
type SortKeys = keyof Data[0];
type SortOrder = "ascn" | "desc";

interface SortableTableGen {
  data: Data;
}

// put into helper funtion
function sortRows(
  data: Data,
  sort: { order: string; orderBy: SortKeys }
): Data {
  if (!sort) return data;

  const reverse = sort.order === "desc";

  const sortedData = data.sort((a, b) => {
    return a[sort.orderBy] > b[sort.orderBy] ? 1 : -1;
  });
  if (reverse) {
    return sortedData.reverse();
  }
  return sortedData;
}

// function filterByValue() {
//   return fakeData.filter((o) =>
//     Object.keys(o).some((k) =>
//       o[k].toLowerCase().includes(string.toLowerCase())
//     )
//   );
// }

const SortableTable: React.FC<SortableTableGen> = ({ data }) => {
  // filterByValue();
  const [activePage, setActivePage] = useState<number>(1);
  const rowsPerPage: number = 5;
  const count: number = data.length;
  const totalPages: number = Math.ceil(count / rowsPerPage);

  const [sort, setSort] = useState<{ order: SortOrder; orderBy: SortKeys }>({
    order: "ascn",
    orderBy: "id",
  });

  const sortedRows = sortRows(data, sort);
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);

  const handleSort = (event: React.MouseEvent<unknown>, accessor: SortKeys) => {
    setActivePage(1);
    setSort((prevSort) => ({
      order:
        prevSort.order === "ascn" && prevSort.orderBy === accessor
          ? "desc"
          : "ascn",
      orderBy: accessor,
    }));
  };

  const headers: { key: SortKeys; label: string }[] = [
    { key: "id", label: "id" },
    { key: "mission_name", label: "name" },
    { key: "launch_date_utc", label: "date" },
  ];

  // {
  //   /* <Table>, <TableRow>, <TableHead> */
  // }

  return (
    <>
      <table>
        <thead>
          <tr>
            {headers.map((row) => {
              return (
                <th key={row.key}>
                  {row.label}
                  <button onClick={(e) => handleSort(e, row.key)}>
                    sort later
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {calculatedRows.map((lunch) => {
            return (
              <tr key={lunch.id} className={classes.tablerow}>
                <td>{lunch.id}</td>
                <td>{lunch.mission_name}</td>
                <td>{lunch.launch_date_utc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        count={count}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
        setActivePage={setActivePage}
      ></Pagination>
    </>
  );
};

export default SortableTable;
