import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import Pagination from "./Pagination";

import { SelectChangeEvent } from "@mui/material";
import { convertUTCDate } from "./helpers";

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

const sampleTime = "2015-12-22T01:29:00.000Z";

// const time = new Date(sampleTime).toLocaleTimeString([], {
//   //   year: "numeric",
//   //   day: "numeric",
//   //   month: "numeric",
//   year: "numeric",
//   month: "numeric",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",

//   //   timeStyle: "long",
//   //   hour12: true,
//   //   timeZone: "UTC",
// });

// data types

type Data = typeof fakeData;
type SortKeys = keyof Data[0];
type SortOrder = "asc" | "desc";

interface HeadItem {
  id: SortKeys;
  label: string;
  numeric: boolean;
}

const headItems: readonly HeadItem[] = [
  {
    id: "id",
    label: "id",
    numeric: true,
  },
  {
    id: "mission_name",
    label: "name",
    numeric: false,
  },
  {
    id: "launch_date_utc",
    label: "date",
    numeric: false,
  },
];

interface MuiTableProps {
  data: Data;
}

function paginateRows(
  sortedRows: Data,
  activePage: number,
  rowsPerPage: number
) {
  return [...sortedRows].slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );
}

function filterData(data: Data, filter: string, filterBy: SortKeys): Data {
  if (filter === "") return data;

  const filteredData: Data = data.filter((item) => {
    if (filterBy === "id") {
      console.log("czy szuka tu ");
      return item[filterBy] === filter;
    }
    if (filterBy === "mission_name") {
      return item[filterBy]
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    }
    if (filterBy === "launch_date_utc") {
      //   return convertUTCDate(item[filterBy]) === filter;
      return convertUTCDate(item[filterBy]).includes(filter);

      // musimy mieć łańuch znaków year osobno w zmiennej
      //  bierzącego itemu np 2015
      // i wtedy pytać go czy input zawieera 2015

      // gdy mamy input zawierający na calym itemie to szuka też po sekundach !
    }
    return filteredData;
  });
  return filteredData;
}

function sortRows(data: Data, sort: SortOrder, sortBy: SortKeys): Data {
  const reverse = sort === "desc";
  let sortedData2: Data = [];

  if (sortBy === "id") {
    sortedData2 = data.sort((a, b) => {
      return Number(a[sortBy]) > Number(b[sortBy]) ? 1 : -1;
    });
  } else {
    sortedData2 = data.sort((a, b) => {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    });
  }

  if (reverse) return sortedData2.reverse();
  return sortedData2;
}

const MuiTable: React.FC<MuiTableProps> = ({ data }) => {
  //   console.log(time);
  console.log(sampleTime);
  console.log(convertUTCDate(sampleTime));

  const [activePage, setActivePage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState<string>("");
  const [filterBy, setFilterBy] = useState<SortKeys>("mission_name");
  // sort state
  const [sort, setSort] = useState<SortOrder>("asc");
  const [sortBy, setSortBy] = useState<SortKeys>("id");

  const handleSort = (property: SortKeys) => {
    setActivePage(1);
    const isAsc = sortBy === property && sort === "asc";
    setSort(isAsc ? "desc" : "asc");
    setSortBy(property);
  };

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setActivePage(1);
    const value = e.target.value;
    setFilterValue(value);
  }

  function handleFilterBy(e: SelectChangeEvent) {
    setActivePage(1);
    setFilterValue("");
    const value = e.target.value as "launch_date_utc" | "mission_name" | "id";
    setFilterBy(value);
  }

  const rowsPerPage: number = 5;

  const filteredData = filterData(data, filterValue, filterBy);
  const sortabledData = sortRows(filteredData, sort, sortBy);

  const dataCount: number = sortabledData.length;
  const totalPages: number = Math.ceil(dataCount / rowsPerPage);

  const paginatedData = paginateRows(sortabledData, activePage, rowsPerPage);
  return (
    <Box
      mt={5}
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Paper
        sx={{
          width: "100%",
          mb: 2,
          maxWidth: "1250px",
        }}
      >
        {/* filter selector  */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Find:</InputLabel>
          <Select
            sx={{ minWidth: "460px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="filter"
            onChange={handleFilterBy}
            value={filterBy}
          >
            <MenuItem value="id">id</MenuItem>
            <MenuItem value="mission_name">name</MenuItem>
            <MenuItem value="launch_date_utc">date</MenuItem>
          </Select>
        </FormControl>
        {/*  input control for filter   */}
        <FormControl>
          {/* <InputLabel id="demo-simple-select-label">Sort By:</InputLabel> */}
          <TextField
            // helperText={`enter your: ${}`}
            id="demo-helper-text-aligned"
            value={filterValue}
            onChange={handleFilter}
          />
        </FormControl>

        {/* <input value={filterValue} onChange={(e) => handleFilter(e)}></input> */}
        <Table sx={{ mb: 5 }}>
          <TableHead>
            <TableRow>
              {headItems.map((item) => {
                return (
                  <TableCell key={item.id}>
                    <TableSortLabel
                      active={sortBy === item.id}
                      direction={sortBy === item.id ? sort : "desc"}
                      onClick={() => handleSort(item.id)}
                    >
                      {item.label}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {paginateRows(
              sortRows(data, sort, sortBy),
              activePage,
              rowsPerPage
            ) */}
            {paginatedData.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.mission_name}</TableCell>
                  <TableCell>{convertUTCDate(item.launch_date_utc)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Pagination
          activePage={activePage}
          count={dataCount}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          setActivePage={setActivePage}
        ></Pagination>
      </Paper>
    </Box>
  );
};

export default MuiTable;
