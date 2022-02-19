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

//  filter only in Lunch name rocket !
export function filterByValue() {
  const string = "";

  // filter in all object keys
  const dupa = fakeData.filter((o) =>
    Object.keys(o).some((k) =>
      o[k].toLowerCase().includes(string.toLowerCase())
    )
  );

  //   filter only o.name mision
  const dupa2 = fakeData.filter((o) =>
    o.mission_name.toLowerCase().includes(string.toLowerCase())
  );

  //   console.log(dupa);
  console.log(dupa2);
}
console.log("bbbbbbbbbbbb");
filterByValue();
