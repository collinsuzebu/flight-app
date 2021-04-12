import React from "react";
import { Spinner } from "reactstrap";
import { FlightList } from "./FlightList";

import { NavBar } from "./NavBar";

const HomePage = () => {
  const loading = false;

  const flights = [
    {
      flight_number: 1,
      details: "details 1",
      mission_name: "mission_name 1",
      launch_success: true,
      launch_year: 2020,
    },
    {
      flight_number: 2,
      details: "details 2",
      mission_name: "mission_name 2",
      launch_success: false,
      launch_year: 2021,
    },
  ];

  return (
    <>
      <NavBar />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      ) : (
        <FlightList flights={flights} />
      )}
    </>
  );
};

export { HomePage };
