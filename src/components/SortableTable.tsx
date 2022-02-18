import React, { useState, useCallback } from "react";
import Pagination from "./Pagination";
import classes from "./SortableTable.module.css";

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

// declarate Types:

type Data = typeof fakeData; // data type from fake data

type SortKeys = keyof Data[0];

type SortOrder = "ascn" | "desc";

interface SortableTableGen {
  data: Data;
} // generic component // props data

// data is our json

function sortData({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Data;
  sortKey: SortKeys;
  reverse: boolean;
}) {
  if (!sortKey) return tableData;

  const sortedData = tableData.sort((a, b) => {
    console.log(a);
    console.log(b);
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}

const SortableTable: React.FC<SortableTableGen> = ({ data }) => {
  const [sortKey, setSortKey] = useState<SortKeys>("mission_name"); // put here key from fake api     // po czym ma sortować
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn"); // do sprwadzenia po czym ma sortować    // czy asc czy dsc

  //  struktura  sortKeys z data + label strong   ( key:SortKey , label:string - moja nazwa)
  // header   czyli data object key properties { id: 1 } + label name

  //   our columns
  const headers: { key: SortKeys; label: string }[] = [
    { key: "id", label: "id" },
    { key: "mission_name", label: "name" },
    { key: "launch_date_utc", label: "date" },
  ];

  //    TABLE INFO
  const [activePage, setActivePage] = useState<number>(1);
  const rowsPerPage: number = 3;
  const count: number = data.length;
  const totalPages: number = Math.ceil(count / rowsPerPage); //
  const calculatedRows = data.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  const changeSort = (key: SortKeys) => {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    setSortKey(key);
    console.log(sortOrder);
  };

  //  check html table
  return (
    <>
      <table>
        {/* t head */}
        <thead>
          <tr>
            {headers.map((row) => {
              return (
                <th key={row.key}>
                  {row.label}
                  {/* component is added here becouse of rotate icon if asc desc */}
                  <button onClick={() => changeSort(row.key)}>
                    {" "}
                    sort later
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {sortedData().map((lunch) => {
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

// function SortableTable({ data }: { data: Data }) {
//   const [sortKey, setSortKey] = useState<SortKeys>("last_name");
//   const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

//   const headers: { key: SortKeys; label: string }[] = [
//     { key: "id", label: "ID" },
//     { key: "first_name", label: "First name" },
//     { key: "last_name", label: "Last name" },
//     { key: "email", label: "Email" },
//     { key: "gender", label: "Gender" },
//     { key: "ip_address", label: "IP address" },
//   ];

//   const sortedData = useCallback(
//     () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
//     [data, sortKey, sortOrder]
//   );

//   function changeSort(key: SortKeys) {
//     setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

//     setSortKey(key);
//   }

//   return (
//     <table>
//       <thead>
//         <tr>
//           {headers.map((row) => {
//             return (
//               <td key={row.key}>
//                 {row.label}{" "}
//                 <SortButton
//                   columnKey={row.key}
//                   onClick={() => changeSort(row.key)}
//                   {...{
//                     sortOrder,
//                     sortKey,
//                   }}
//                 />
//               </td>
//             );
//           })}
//         </tr>
//       </thead>

//       <tbody>
//         {sortedData().map((person) => {
//           return (
//             <tr key={person.id}>
//               <td>{person.id}</td>
//               <td>{person.first_name}</td>
//               <td>{person.last_name}</td>
//               <td>{person.email}</td>
//               <td>{person.gender}</td>
//               <td>{person.ip_address}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default SortableTable;
