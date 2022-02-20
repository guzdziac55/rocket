import "./App.css";
import MuiTable from "./components/MuiTable";
import { StyledEngineProvider } from "@mui/material/styles";
const fakeData = [
  {
    launch_date_utc: "2014-01-06T18:05:00.000Z",
    mission_name: "Thaicom 6",
    id: "1332",
  },
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
    mission_name: "aaaaaa",
    id: "1",
  },
  {
    launch_date_utc: "2015-12-22T01:29:00.000Z",
    mission_name: "bbbbbbbbb",
    id: "2",
  },
  {
    launch_date_utc: "2015-12-22T01:29:00.000Z",
    mission_name: "ccccccccc2",
    id: "3",
  },
  {
    launch_date_utc: "2015-12-22T01:29:00.000Z",
    mission_name: "ddddddd",
    id: "4",
  },
  {
    launch_date_utc: "2015-12-22T01:29:00.000Z",
    mission_name: "eeeeeeee",
    id: "5",
  },
  {
    launch_date_utc: "2015-12-22T01:29:00.000Z",
    mission_name: "eeeeeeee",
    id: "51",
  },
  {
    launch_date_utc: "2015-12-22T01:29:00.000Z",
    mission_name: "eeeeeeee",
    id: "52",
  },
  {
    launch_date_utc: "2015-12-22T01:29:00.000Z",
    mission_name: "eeeeeeee",
    id: "56",
  },
];

function App() {
  return (
    <StyledEngineProvider>
      <div className="App">
        <MuiTable data={fakeData}></MuiTable>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
